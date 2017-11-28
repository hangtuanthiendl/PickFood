import {firebaseApp} from '../Server/FirebaseCon';


class GetData {
    static setUserInfo(userinfo){
        firebaseApp.database().ref().child(`User/${userinfo.uid}`).set(userinfo)
    }
    static getUserInfo(uid, callback){
        firebaseApp.database().ref(`User/${uid}`).once('value', (userinfo) => {callback(userinfo.val())})
    }
    static getDetailShop(uid, callback) {
        firebaseApp.database().ref(`Shop/${uid}`).once('value', (shopinfo) => {callback(shopinfo.val())})
    }
    static getBanner(callback){
        firebaseApp.database().ref('Banner').once('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                items.push({
                    image: child.val(),
                });
            });
            callback(items)
        })
    }
    static getCategories(callback){
        firebaseApp.database().ref('Categories').once('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                items.push({
                    category: child.key,
                    image: child.val(),
                });
            });
            callback(items.reverse())
        })
    }
    static get4ItemByCategory(category,callback){
        firebaseApp.database().ref('Product').orderByChild("category").equalTo(category).limitToLast(4).on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                let item = child.val()
                item['key'] = child.key
                items.push(item);
            });
            callback(items.reverse())
        })
    }
    static getItem (id,callback) {
        firebaseApp.database().ref(`Product/${id}`).on('value', (item) => {callback(item.val())})
    }
    static getNewItem (limit,callback) {
        firebaseApp.database().ref('Product').limitToLast(limit).on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                let item = child.val()
                item['key'] = child.key
                items.push(item);
            });
            callback(items.reverse())
        })
    }
    static getHotItem (limit,callback) {
        firebaseApp.database().ref('Product').limitToFirst(limit).on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                let item = child.val()
                item['key'] = child.key
                items.push(item);
            });
            callback(items.reverse())
        })
    }
    static pushProduct(productinfo, uid){
        productinfo['owner'] = uid
        firebaseApp.database().ref().child('Product').push(productinfo)
    }
    static pushShop(shopinfo){
        firebaseApp.database().ref().child('Shop').push(shopinfo)
    }
    static pushMenu(menuinfo){
        firebaseApp.database().ref().child("Menu").push(menuinfo)
    }
    static setBanner(bannerInfo){
        firebaseApp.database().ref().child('Banner').set(bannerInfo)
    }
    static getShopItem (callback) {
        firebaseApp.database().ref('Shop').on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                let item = child.val()
                item['key'] = child.key
                items.push(item);
            });
            callback(items)
        })
    }
    static getShopItem (callback) {
        firebaseApp.database().ref('Shop').on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                let item = child.val()
                item['key'] = child.key
                items.push(item);
            });
            callback(items)
        })
    }
    static getMenuItem (callback) {
        firebaseApp.database().ref('Menu').on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                let item = child.val()
                item['key'] = child.key
                items.push(item);
            });
            callback(items)
        })
    }

    //Home page
    static getHomePageBanner(callback){
        firebaseApp.database().ref('Banner').once('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                items.push({
                    image: child.val(),
                });
            });
            callback(items)
        })
    }
}
module.exports = GetData;