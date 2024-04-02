export default {

    /**
     * 削除フラグ <br>
     * 0:削除無 <br>
     * 1:削除する
     */
    DelFlgEnum: [
        {label: "削除無", value: 0},
        {label: "削除する", value: 1}
    ],

    /**
     * 利用ステータス <br>
     * 0:利用停止 <br>
     * 1:利用許可
     */
    BrandStatusEnum: [
        {label: "利用許可", value: 1},
        {label: "利用停止", value: 0}
    ],

    /**
     * 有効ステータス <br>
     * 0:全て <br>
     * 1:有効 <br>
     * 2:無効
     */
    EffectiveAllStatusEnum: [
        {label: "全て", value: 0},
        {label: "有効", value: 1},
        {label: "無効", value: 2}
    ],

    /**
     * 有効ステータス <br>
     * 0:有効 <br>
     * 1:無効
     */
    EffectiveStatusEnum: [
        {label: "有効", value: 0},
        {label: "無効", value: 1}
    ],

    /**
     * 初期登録ユーザーフラグ <br>
     * 0:後期登録 <br>
     * 1:初期登録
     */
    FirstLoginFlgEnum: [
        {label: "後期登録", value: 0},
        {label: "初期登録", value: 1}
    ],

    /**
     * 権限フラグ <br>
     * 0:無し <br>
     * 1:有り
     */
    LimitFlgEnum: [
        {label: "無し", value: 0},
        {label: "有り", value: 1}
    ],

    /**
     * お届け先類型 <br>
     * 1:一括設定 <br>
     * 2:商品ごとに設定
     */
    DeliveryItemTypeEnum: [
        {label: "一括設定", value: 1},
        {label: "商品ごとに設定", value: 2}
    ],

    /**
     * 発注/請求先類型 <br>
     * 0:会社所在地 <br>
     * 1:その他
     */
    PurchaserClaimTypeEnum: [
        {label: "会社所在地", value: '0'},
        {label: "その他", value: '1'}
    ],

    /**
     * お届け先種類 <br>
     * 0:建築地 <br>
     * 1:会社所在地
     * 2:その他
     */
    DeliveryTypeEnum: [
        {label: "建築地", value: '0'},
        {label: "会社所在地", value: '1'},
        {label: "その他", value: '2'}
    ],

    /**
     * お届け先トラック搬入制限 <br>
     * 0:4t
     * 1:2tショート
     * 2:2t
     * 3:制限なし
     */
    DeliveryTransportFlgEnum: [
        {label: "4t", value: 0},
        {label: "2tショート", value: 1},
        {label: "2t", value: 2},
        {label: "制限なし", value: 3}
    ],

    /**
     * 支払ステータス <br>
     * 0:未支払
     * 1:支払済
     */
    PaymentRmStatusEnum: [
        {label: "未支払", value: 0},
        {label: "支払済", value: 1}
    ],

    /**
     * 発注明細状態 <br>
     * 0:発注未確認
     * 1:発注確認済
     */
    PurchaseStatusEnum: [
        {label: "発注未確認", value: 0},
        {label: "発注確認済", value: 1}
    ],

    /**
     * 入金ステータス <br>
     * 0:未入金
     * 1:入金済
     */
    PaymentStatusEnum: [
        {label: "未入金", value: 0},
        {label: "入金済", value: 1}
    ],

    /**
     * 入金確認区分 <br>
     * 1:入金
     * 2:過不足
     */
    PaymentTypeEnum: [
        {label: "入金", value: 1},
        {label: "過不足", value: 2}
    ],

    /**
     * 発送状態 <br>
     * 0:未発送
     * 1:入金済
     */
    TransStatusEnum: [
        {label: "未発送", value: 0},
        {label: "発送済", value: 1}
    ],

    /**
     * 納期変更フラグ <br>
     * 0:加盟店納期変更
     * 1:管理/メーカー納期変更
     */
    DeliveryChangeFlgEnum: [
        {label: "加盟店納期変更", value: 0},
        {label: "管理/メーカー納期変更", value: 1}
    ],

    /**
     * 納期変更ステータス <br>
     * 0:納期変更依頼中
     * 1:納期変更依頼完了
     */
    DeliveryChangeStatusEnum: [
        {label: "納期変更依頼中", value: 0},
        {label: "納期変更依頼完了", value: 1}
    ],

    /**
     * ファイル種類 <br>
     * 0:加盟店/商品ファイル
     * 1:メーカーファイル
     */
    FileTypeEnum: [
        {label: "商品ファイル", value: 0},
        {label: "メーカーファイル", value: 1}
    ],

    /**
     * 注文商品コメント既読フラグ <br>
     * 0:既読
     * 1:未読
     */
    CommentReadFlgEnum: [
        {label: "既読", value: 0},
        {label: "未読", value: 1}
    ],

    /**
     * 配送料金変更フラグ <br>
     * 0:未変更
     * 1:変更
     */
    TransMoneyFlgEnum: [
        {label: "未変更", value: 0},
        {label: "変更", value: 1}
    ],

    /**
     * 被拒否発注 <br>
     * 0:発注
     * 1:拒否
     */
    RefuseFlgEnum: [
        {label: "発注", value: 0},
        {label: "拒否", value: 1}
    ],

    /**
     * 履歴区分 <br>
     * A:全て公開
     * M:指定メーカー公開
     * R:管理者公開
     */
    LogTypeEnum: [
        {label: "全て公開", value: "A"},
        {label: "指定メーカー公開", value: "M"},
        {label: "管理者公開", value: "R"}
    ],

    /**
     * メールの種類 <br>
     * K:加盟店
     * M:メーカー
     * R:管理側
     */
    UdonTypeEnum: [
        {label: "加盟店", value: "K"},
        {label: "メーカー", value: "M"},
        {label: "管理側", value: "R"}
    ],

    /**
     * 送信区分 <br>
     * 0:未送信
     * 1:送信
     */
    SendFlgEnum: [
        {label: "未送信", value: 0},
        {label: "送信", value: 1}
    ],

    /**
     * 見積状態 <br>
     * 0:見積中
     * 1:見積完了
     * 2:発注完了
     * 3:没（失注）
     * 4:見積依頼
     * 5:見積調整依頼
     * 6:見積調整中
     * 7:発注完了
     */
    EstimateStatusEnum: [
        {label: "見積中", value: 0},
        {label: "見積完了", value: 1},
        {label: "発注完了", value: 2},
        {label: "没（失注）", value: 3},
        {label: "見積依頼", value: 4},
        {label: "見積調整依頼", value: 5},
        {label: "見積調整中", value: 6},
        {label: "拒否", value: 7},
    ],

    /**
     * 発注許可フラグ <br>
     * 0:許可ない
     * 1:許可
     */
    EstimatePermitFlgEnum: [
        {label: "許可ない", value: 0},
        {label: "許可", value: 1}
    ],

    /**
     * 見積利用フラグ <br>
     * 0:利用ない <br>
     * 1:利用
     */
    EstimateUseFlgEnum: [
        {label: "利用ない", value: 0},
        {label: "利用", value: 1}
    ],

    /**
     * 公開フラグ <br>
     * 0:非公開 <br>
     * 1:公開
     */
    OpenFlgEnum: [
        {label: "公開", value: '1'},
        {label: "非公開", value: '0'}
    ],

    /**
     * 新商品フラグ <br>
     * 0:非新商品 <br>
     * 1:新商品
     */
    NewItemFlgEnum: [
        {label: "非新商品", value: 0},
        {label: "新商品", value: 1}
    ],

    /**
     * 商品公開フラグ <br>
     * 1:公開
     * 2:未公開
     */
    ItemStatusEnum: [
        {label: "公開中", value: '1'},
        {label: "非公開", value: '2'}
    ],

    /**
     * 送料設定 <br>
     * 0:都度送料を使用する <br>
     * 1:公開
     */
    MaterialSettingsEnum: [
        {label: "標準送料を使用する", value: '1'},
        {label: "都度送料を使用する", value: '0'}
    ],

    /**
     * ファイル添付 <br>
     * 0:許可しない <br>
     * 1:許可する
     */
    AllowFlgEnum: [
        {label: "許可する", value: '1'},
        {label: "許可しない", value: '0'}
    ],

    /**
     * 標準価格に「～」表示 <br>
     * 0:加盟店サイトに表示しない <br>
     * 1:加盟店サイトに表示する
     */
    PriceSignFlgEnum: [
        {label: "加盟店サイトに表示する", value: '1'},
        {label: "加盟店サイトに表示しない", value: '0'}
    ],

    /**
     * 複数選択 <br>
     * 0:複数選択 <br>
     * 1:非複数選択
     */
    StateFlgEnum: [
        {label: "複数選択", value: 0},
        {label: "非複数選択", value: 1}
    ],

    /**
     * 必須フラグ <br>
     * 0:非必須 <br>
     * 1:必須
     */
    MustFlgEnum: [
        {label: "非必須", value: 0},
        {label: "必須", value: 1}
    ],

    /**
     * 入金確認フラグ <br>
     * 0:未確認 <br>
     * 1:確認
     */
    PaymentFlgEnum: [
        {label: "未確認", value: 0},
        {label: "確認", value: 1}
    ],

    /**
     * 一覧まとめ発注 <br>
     * 0:無 <br>
     * 1:一覧発注
     */
    AddItemListFlgEnum: [
        {label: "無", value: 0},
        {label: "一覧発注", value: 1}
    ],

    /**
     * 表示フラグ <br>
     * 0:表示 <br>
     * 1:表示無
     */
    ShowFlgEnum: [
        {label: "表示", value: 0},
        {label: "表示無", value: 1}
    ],

    /**
     * お気に入り区分 <br>
     * 0:マイ <br>
     * 1:会社
     */
    FavsTypeEnum: [
        {label: "マイ", value: 0},
        {label: "会社", value: 1}
    ],

    /**
     * 削除可否フラグ <br>
     * 0:削除可 <br>
     * 1:削除否
     */
    DeleteFlgEnum: [
        {label: "削除可", value: 0},
        {label: "削除否", value: 1}
    ],

    /**
     * ソート方向 <br>
     * 0:上 <br>
     * 1:下
     */
    DirectionEnum: [
        {label: "上", value: 0},
        {label: "下", value: 1}
    ],

    /**
     * 見積依頼表示 <br>
     * 0:見積中、6ヶ月以内の見積 <br>
     * 1:すべて
     */
    EstimateRequestEnum: [
        {label: "見積中、6ヶ月以内の見積", value: 0},
        {label: "すべて", value: 1}
    ],

    /**
     * お知らせカテゴリ <br>
     * 0:重要なお知らせ <br>
     * 1:新商品 <br>
     * 2:仕様変更 <br>
     * 3:休業日 <br>
     * 4:移転のお知らせ <br>
     * 5:価格改定 <br>
     * 6:商品廃盤 <br>
     * 7:その他
     */
    NoticesCategoryEnum: [
        {label: "重要なお知らせ", value: 0},
        {label: "新商品", value: 1},
        {label: "仕様変更", value: 2},
        {label: "休業日", value: 3},
        {label: "移転のお知らせ", value: 4},
        {label: "価格改定", value: 5},
        {label: "商品廃盤", value: 6},
        {label: "その他", value: 7},
    ],

    /**
     * 公開対象 <br>
     * 0:加盟店へ公開 <br>
     * 1:メーカーへ公開 <br>
     */
    NoticesShopEnum: [
        {label: "加盟店へ公開", value: 0},
        {label: "メーカーへ公開", value: 1}
    ],

    /**
     * 案件表示 <br>
     * 0:引渡予定日3ヶ月以内の案件 <br>
     * 1:すべて <br>
     */
    projectTypeEnum: [
        {label: "引渡予定日3ヶ月以内の案件", value: 0},
        {label: "すべて", value: 1},
    ],

    /**
     * 注文 <br>
     * 0:全 <br>
     * 1:有 <br>
     * 2:無 <br>
     */
    orderTypeEnum: [
        {label: "全て", value: 0},
        {label: "有", value: 1},
        {label: "無", value: 2}
    ],

    /**
     * ステータス <br>
     * 0:公開中 <br>
     * 1:未公開 <br>
     */
    statusEnum: [
        {label: "公開中", value: 0},
        {label: "未公開", value: 1}
    ],

    /**
     * 閲覧制限 <br>
     * 0:制限しない <br>
     * 1:制限する <br>
     */
    limitEnum: [
        {label: "制限しない", value: 0},
        {label: "制限する", value: 1}
    ],

    /**
     * トラック制限 <br>
     * 0:4t <br>
     * 1:2t <br>
     * 1:2ショート <br>
     * 1:制限なし <br>
     */
    truckRestrictions: [
        {label: "4t", value: '0'},
        {label: "2t", value: '1'},
        {label: "2ショート", value: '2'},
        {label: "制限なし", value: '3'}
    ],

    /**
     * 見積依頼機能 <br>
     * 0:利用しない <br>
     * 1:利用する <br>
     */
    EstimateFunctionEnum: [
        {label: "利用しない", value: '0'},
        {label: "利用する", value: '1'}
    ],

    /**
     * メール <br>
     * 0:受注メール <br>
     * 1:見積依頼メール <br>
     */
    orderEamilEnum: [
        {label: "受注メール", value: 0},
        {label: "見積依頼メール", value: 1}
    ],

    /**
     * 注文状況 <br>
     * 0:発注受付 <br>
     * 1:発注確定 <br>
     * 2:納期変更受付 <br>
     * 3:納期変更確定 <br>
     * 4:入金待ち <br>
     * 5:支払待ち <br>
     * 6:発送待ち <br>
     * 7:発送済 <br>
     */
    ordersStatusEnum: [
        {label: "発注受付", value: 0},
        {label: "発注確定", value: 1},
        {label: "納期変更受付", value: 2},
        {label: "納期変更確定", value: 3},
        {label: "入金待ち", value: 4},
        {label: "支払待ち", value: 5},
        {label: "発送待ち", value: 6},
        {label: "発送済", value: 7}
    ],

    /**
     * 加盟店ユーザー権限 <br>
     * 0:管理者権限 <br>
     * 1:案件管理権限 <br>
     * 2:見積管理権限 <br>
     * 3:見積依頼権限 <br>
     * 4:注文管理権限 <br>
     * 5:発注権限 <br>
     * 6:お気に入り権限 <br>
     * 7:ユーザー管理権限 <br>
     */
    merchantManagerFlg: [
        {label: "管理者権限", value: 0},
        {label: "案件管理権限", value: 1},
        {label: "見積管理権限", value: 2},
        {label: "見積依頼権限", value: 3},
        {label: "注文管理権限", value: 4},
        {label: "発注権限", value: 5},
        {label: "お気に入り権限", value: 6},
        {label: "ユーザー管理権限", value: 7}
    ],

    getEnumText(arr, value) {

        let label = "";
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].value == value) {
                label = arr[i].label;
                break;
            }
        }

        return label;
    },

    getEnumValue(arr, label) {
        let code = "";
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].label == label) {
                code = arr[i].value;
                break;
            }
        }

        return code;
    }

}
