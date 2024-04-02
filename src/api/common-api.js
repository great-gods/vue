import httpApi from '@/api/index'
import common from '@/utils/common.js'

export default {
    // メーカーリスト
    async getMakerInfo() {
        let makerInfo = {};
        await httpApi.get("/api/com/maker/list", null).then((res) => {
            makerInfo = res.data;
        })

        return makerInfo;
    },
    // メーカーブランド一覧
    async getMakerBrandInfo(makerNo) {
        let makerBrandInfo = {};
        await httpApi.get("/api/com/maker/brand/list/" + makerNo, null).then((res) => {
            makerBrandInfo = res.data;
        })

        return makerBrandInfo;
    },
    // メーカーブランド一覧
    async getMakerUserInfo(makerNo) {
        let makerUserInfo = {};
        await httpApi.get("/api/com/maker/user/list/" + makerNo, null).then((res) => {
            makerUserInfo = res.data;
        })

        return makerUserInfo;
    },
    // カテゴリ一覧
    async getCategoryList() {
        let categoryInfo = {};
        await httpApi.get("/api/com/category/list", null).then((res) => {
            categoryInfo = res.data;
        })

        return categoryInfo;
    },
    // 加盟店リスト
    async getMerchantsList() {
        let merchantInfo = {};
        await httpApi.get("/api/com/merchant/list", null).then((res) => {
            merchantInfo = res.data;
        })

        return merchantInfo;
    },
    // 加盟店ブランド一覧
    async getMerchantsBrandList(merchantNo) {
        let merchantBrandInfo = {};
        await httpApi.get("/api/com/merchant/brand/list/" + merchantNo, null).then((res) => {
            merchantBrandInfo = res.data;
        })

        return merchantBrandInfo;
    },
    // 加盟店ユーザー一覧
    async getMerchantsUserList(merchantNo) {
        let merchantUserInfo = {};
        await httpApi.get("/api/com/merchant/user/list/" + merchantNo, null).then((res) => {
            merchantUserInfo = res.data;
        })

        return merchantUserInfo;
    },
    // 公開ブランド情報
    async getBrandInfo() {
        let brandInfo = {};
        await httpApi.get("/api/com/brand/list", null).then((res) => {
            brandInfo = res.data;
        })

        return brandInfo;
    },
    // 案件一覧
    async getProjectList() {
        let projectInfo = {};
        await httpApi.get("/api/com/project/list", null).then((res) => {
            projectInfo = res.data;
        })

        return projectInfo;
    },
    // お知らせカテゴリー一覧
    async getNoticeCategoryList(makerFlg) {

        let categoryInfo = {};
        await httpApi.get('/api/com/notice/categorys/list', {makerFlg: makerFlg}).then((res) => {
            categoryInfo = res.data;
        });

        return categoryInfo;
    },
    // 都道府県一覧
    async getPrefectureList() {
        let prefectureInfo = {};
        await httpApi.get('/api/com/prefecture/list', null).then((res) => {
            prefectureInfo = res.data;
        });

        return prefectureInfo;
    },
    // 住所検索
    async getAddressInfo(postcode) {
        let addressInfo = {};
        await httpApi.get('/api/com/address/info/' + postcode, null).then((res) => {
            addressInfo = res.data;
        });

        return addressInfo;
    },
    // 住所検索
    async getAddressInfoList(postcode) {
        let addressInfoList = [];
        await httpApi.get('/api/com/address/info/list/' + postcode, null).then((res) => {
            if (res.code == 200) {
                addressInfoList = res.data;
            } else {
                common.showApiErrors(res);
            }
        });

        return addressInfoList;
    },

    // 住所から郵便番号を検索する
    async getAddressIList(prefecture, address1) {
        let addressList = [];
        await httpApi.get('/api/com/lookup/postcode/info', {prefecture: prefecture, address1: address1}).then((res) => {
            addressList = res.data;
        });

        return addressList;
    },
    async getPaymentDate(deliveryDate, supportPeriod) {
        let userPaymentDate = "";
        await httpApi.get('/api/com/calculate/payment_date', {deliveryDate: deliveryDate, supportPeriod: supportPeriod}).then((res) => {
            userPaymentDate = res.data;
        });
        return userPaymentDate;
    },
    // 加盟店リスト
    async getMerchantsListByBrandNo(brandNo) {
        let merchantInfo = {};
        await httpApi.get("/api/com/merchant/list/"+brandNo, null).then((res) => {
            merchantInfo = res.data;
        })

        return merchantInfo;
    },
    //お気に入り名一覧の取得
    async getFavNameList(merchantNo, merchantUserNo) {
        let favNameList = [];
        await httpApi.get("/api/merchants/favorite/name/list/"+merchantNo, {merchantsNo: merchantNo, merchantsUserNo: merchantUserNo}).then((res) => {
            favNameList = res.data;
        })
        return favNameList;
    }
}
