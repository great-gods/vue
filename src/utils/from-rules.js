/* iphone */
const validatePhone = (rule, value, callback) => {
  const patter = new RegExp('^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$')
  if (!patter.test(value)) {
    return callback(new Error('ipone!'))
  } else {
    callback()
  }
}
export default {
  dateRules: {
    /* 公開日 */
    startTstamp: [
      { type: 'date', required: true, message: '入力してください。', trigger: 'blur' }
    ],
    endTstamp: [
      { type: 'date', required: true, message: '入力してください。', trigger: 'blur' }
    ],
    noTtitle: [
      { required: true, message: '入力してください。', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    type: [
      { type: 'array', required: true, message: 'タイプを選択してください', trigger: 'change'},
    ],
    openObject: [
      { type: 'array', required: true, message: 'タイプを選択してください', trigger: 'change'},
    ],
    openBrand: [
      { type: 'array', required: true, message: 'タイプを選択してください', trigger: 'change'},
    ],
    status: [
      { required: true, message: 'タイプを選択してください', trigger: 'change' },
    ],
    // iphone: [
    //   { validator: validatePhone, required: true, message: 'タイプを選択してください', trigger: 'blur' },
    // ],
    content: [
      { required: true, message: '内容を入力してください', trigger: 'change' },
    ],
  },
  itemsRules: {
    itemName: [
      { required: true, message: '商品名を入力してください', trigger: 'blur' },
      { min: 1, max: 200, message: 'テキストは最大200', trigger: 'blur' },
    ]
  }
}