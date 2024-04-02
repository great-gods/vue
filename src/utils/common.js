import moment from 'moment';
import { ElMessage } from "element-plus"

export default {
  pageNum: 50,
  pageSizes: [20, 40, 60],
  loginMakerNo: 8,
  loginMakerName: 'メーカー1',
  merchantNo: 2,
  merchantName: '加盟店1',

  getLoginUserName() {
    //let decoded = decodes(localStorage.token);
    return "横田 梨華";
  },
  //
  isNull(str) {
    if (str !== '' && str != null && str != 'null' && str != undefined && str != "undefined") {
      return false;
    } else {
      return true;
    }
  },
  isInteger(str) {
    let patt = /^[0-9]+$/;
    if (str != '' && str != null && str != 'null') {
    return patt.test(str);
    } else {
    return false;
    }
  },
  //検索欄の特殊文字置換
  checkMsg(search) {
    if (search.match("`%{}|")) {
      search = search.replace(/[\\`%{}|]/g, "");
    }
    return search;
  },
  openAlert(confirm, text) {
    confirm(text, {
      // カスタムクラス名customClass
      // クラス名customClassをカスタマイズ
      customClass: 'message-logout logout',
      center: true
    })
  },
  tipsMessage(message, text, status) {
    message({
      message: text,
      type: status,
      duration: 2000,
    });
  },
  //年月日切り取り
  dateStrYM(time) {
    if (this.isNull(time)) {
      return "";
    }

    return moment(time).format('YYYY年MM月');
  },
  dateYMd(time) {
    if (this.isNull(time)) {
      return "";
    }

    return moment(time).format('YYYY-MM-DD');
  },
  dateYMdhms(time) {
    if (this.isNull(time)) {
      return "";
    }

    //データを返却
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
  },
  dateYMdhm(time) {
    if (this.isNull(time)) {
      return "";
    }

    //データを返却
    return moment(time).format('YYYY-MM-DD HH:mm');
  },
  moneyFormats(num) {

    let money = 0;
    if (!this.isNull(num)) {
      money = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "￥" + money;
  },
  getMakerNo() {
    return "1";
  },
  getMerchantsNo() {
    return "1";
  },
  getMerchantsUserNo() {
    return "1";
  },
  showApiErrors(res) {
    let errors = res.errors;
    let messages = "";
    if (!this.isNull(errors)) {
      errors.forEach(e => {
        messages += e + "<br/>"
      });
    }

    if (!this.isNull(res.message)) {
      messages += res.message
    }

    if (this.isNull(messages)) {
      messages = "システムエラー";
    }
    ElMessage({type: 'error', message: messages, dangerouslyUseHTMLString:true});
  },
  priceSwitchMinus(value) {
    let result = '';
    if (this.isNull(value)) {
      return result;
    }
    let change_money = value;
    value = value.replace(/[\u3000\uff01-\uff5f]/g, function($0) {
      return $0 == "\u3000" ? "" : String.fromCharCode($0.charCodeAt(0) - 0xfee0);
    });
    value = value.replace(/[^\d]/g,'');
    let minus_flg = 0;
    if(change_money < 0 || change_money == '-' || change_money[0] == '-'){
      minus_flg = 1;
    }
    let pri = value.replace(/\,/g,'');
    let re = /^[0-9]+.?[0-9]*$/;
    if (re.test(pri)) {
      let tmp = "";
      for (let i = 0; i < pri.length; i++) {
        if (pri.charCodeAt(i) > 65248 && pri.charCodeAt(i) < 65375) {
          tmp += String.fromCharCode(pri.charCodeAt(i) - 65248);
        } else {
          tmp += String.fromCharCode(pri.charCodeAt(i));
        }
      }
      pri = tmp;
      if (isNaN(pri)) return result;
      let resultArray = new Array();
      if (pri.length > 3) {
        let i = true;
        while (i) {
          resultArray.push(pri.slice(-3));
          pri = pri.slice(0, pri.length-3);
          if(pri.length < 4) {
            i = false;
          }
        }
        let sortArray = new Array();
        for(let i = resultArray.length-1;i >= 0; i--) {
          sortArray.push(resultArray[i]);
        }
        result = pri + "," + sortArray.join(",");
      } else {
        result = pri;
      }
      if (minus_flg == 1) {
        result = '-'+ result;
      }
      return result;
    } else if (minus_flg == 1) {
      return '-';
    } else {
      return '';
    }
  },
  replaceSingleMinus(value) {
    return value == '-' ? '':value;
  },

  parseInt(value) {
    return isNaN(value) ? 0 : value;
  }
}
