interface Options {
  sortOrder?: string
}
interface ExtraInfo {
  prev?: any
  next?: any
}
let _index = 0 // 字符索引
const _getType = (o: any) => Object.prototype.toString.call(o)
const _isEmpty = (o: any) => _getType(o) === '[object Null]' || _getType(o) === '[object Undefined]'
const _chineseReg = /[\u4e00-\u9fa5]/ // 中文正则
/**
 * 对比字符串每个字符的Unicode编码
 */
const compareStrByCharCode = (value: string, nextValue: string, ASC: number, DESC: number): number => {
  const sa1 = value.charAt(_index)
  const sa2 = nextValue.charAt(_index)
  const ca1 = value.charCodeAt(_index)
  const ca2 = nextValue.charCodeAt(_index)
  if (ca1 === ca2) {
    _index++
    return compareStrByCharCode(value, nextValue, ASC, DESC)
  } else {
    if (_isEmpty(ca1) || isNaN(ca1)) {
      return ASC
    }
    if (_isEmpty(ca2) || isNaN(ca2)) {
      return DESC
    }
    if (_chineseReg.test(sa1) && _chineseReg.test(sa2)) {
      return ASC === 1 ? sa1.localeCompare(sa2, 'zh') : sa2.localeCompare(sa1, 'zh')
    }
    return ca1 - ca2 > 0 ? ASC : DESC
  }
}
/**
 * 带尾数字的按数字顺序
 * 其他按字符Unicode 编码顺序排序
 */
export const CustomSortFn = (value: string, nextValue: string, options: Options & any = {}, extraInfo: ExtraInfo & any = '') => {
  const ASC = options.sortOrder === 'asc' ? -1 : 1
  const DESC = options.sortOrder === 'asc' ? 1 : -1
  const ZERO = 0

  // 全是文件或者全是文件夹时才需要继续
  if (extraInfo && Object.prototype.toString.call(extraInfo) === '[object Object]') {
    const { prev, next } = extraInfo
    const needContinue = [prev, next].every(i => i.isFile) || [prev, next].every(i => !i.isFile)
    if (!needContinue) {
      return ASC
    }
  }
  if (_isEmpty(value)) {
    return ASC
  }
  if (_isEmpty(nextValue)) {
    return DESC
  }
  let diff = ZERO
  if (value === nextValue) {
    diff = ZERO
  } else {
    value += ''
    nextValue += ''

    if (!value) {
      return ASC
    }
    if (!nextValue) {
      return DESC
    }

    // 首数字
    const _leftNumberReg = /^\(?(\d+(\.\d+)?)\)?/

    const _leftNumberRegMatchs1 = _leftNumberReg.exec(value)
    const _leftNumberRegMatchs2 = _leftNumberReg.exec(nextValue)

    const _leftNumberDelStringReg1 = ((_leftNumberRegMatchs1 && _leftNumberRegMatchs1[0]) || '').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
    const _leftNumberDelStringReg2 = ((_leftNumberRegMatchs2 && _leftNumberRegMatchs2[0]) || '').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

    const _leftNumber1 = (_leftNumberRegMatchs1 && _leftNumberRegMatchs1[1]) || ''
    const _leftNumber2 = (_leftNumberRegMatchs2 && _leftNumberRegMatchs2[1]) || ''

    const _leftNumberRegExtraString1 = value.replace(new RegExp('^' + _leftNumberDelStringReg1), '')
    const _leftNumberRegExtraString2 = nextValue.replace(new RegExp('^' + _leftNumberDelStringReg2), '')

    if (_leftNumber1 || _leftNumber2) {
      if (!_leftNumber1 && _leftNumber2) {
        return ASC
      }

      if (!_leftNumber2 && _leftNumber1) {
        return DESC
      }

      if (_leftNumber1 !== _leftNumber2) {
        diff = +_leftNumber1 - +_leftNumber2 > 0 ? ASC : DESC
      } else {
        _index = 0
        diff = CustomSortFn(_leftNumberRegExtraString1, _leftNumberRegExtraString2, options, extraInfo)
      }
    } else {
      // 尾数字
      const _rightNumberReg = /\(?(\d+(\.\d+)?)\)?$/

      const _rightNumberRegMatchs1 = _rightNumberReg.exec(_leftNumberRegExtraString1)
      const _rightNumberRegMatchs2 = _rightNumberReg.exec(_leftNumberRegExtraString2)

      const _rightNumberDelStringReg1 = ((_rightNumberRegMatchs1 && _rightNumberRegMatchs1[0]) || '').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
      const _rightNumberDelStringReg2 = ((_rightNumberRegMatchs2 && _rightNumberRegMatchs2[0]) || '').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

      const _rightNumber1 = (_rightNumberRegMatchs1 && _rightNumberRegMatchs1[1]) || ''
      const _rightNumber2 = (_rightNumberRegMatchs2 && _rightNumberRegMatchs2[1]) || ''

      const _rightNumberRegExtraString1 = _leftNumberRegExtraString1.replace(new RegExp(_rightNumberDelStringReg1 + '$'), '')
      const _rightNumberRegExtraString2 = _leftNumberRegExtraString2.replace(new RegExp(_rightNumberDelStringReg2 + '$'), '')

      if (!_rightNumber1 && _rightNumber2) {
        return ASC
      }

      if (!_rightNumber2 && _rightNumber1) {
        return DESC
      }

      if (_rightNumber1 !== _rightNumber2) {
        diff = +_rightNumber1 - +_rightNumber2 > 0 ? ASC : DESC
      } else {
        _index = 0
        diff = compareStrByCharCode(_rightNumberRegExtraString1, _rightNumberRegExtraString2, ASC, DESC)
      }
    }
  }
  return diff
}

// const test = (options = {}) => {
//     const lists = ['Animal', '菩提树', 'Wuhan', '天安门', '文档 1', 'Shenzhen', 'Apple', '1.1 目录', '数据 2', '1.1 目前', '1.1 目啊', '大排档 1', '1.2 内容', '黄鹤楼', '历史', '大酒档 1', 'infoq', '天下第一松', '天下第二']
//     // const lists = ['天下第二', '文档 1', '黄鹤楼', '数据 2']
//     lists.sort((a, b) => {
//         return CustomSortFn(a, b, options)
//     })
//     console.log('Sort Result: ', lists)
// }
// test() // ['1.1 目录', '1.2 内容', 'Animal', 'Apple', 'Shenzhen', 'Wuhan', 'infoq', '黄鹤楼', '历史', '菩提树', '天安门', '天下第二', '天下第一松']
// test({
//     sortOrder: 'asc'
// }) // ['天下第一松', '天下第二', '天安门', '菩提树', '历史', '黄鹤楼', 'infoq', 'Wuhan', 'Shenzhen', 'Apple', 'Animal', '1.2 内容', '1.1 目录']
