import firebase from 'react-native-firebase';


class GetData {
  static setStateCart (keyshop,uid, id) {
    //callback['infor'] = mang
    firebase.database().ref().child(`Cash/${uid}/${keyshop}/${id}/state`).set(1);
   }   
   static removeCartItem(key,uid){
    firebase.database().ref().child(`CartItem/${uid}/${key}`).remove();    
   }
  static saveDataCart (key,uid,id, callback) {
    //callback['infor'] = mang
    firebase.database().ref().child(`CartItem/${uid}/${key}/${id}`).set(callback);
   }
   static saveDataCash (uid, callback) {
    //callback['infor'] = mang
    firebase.database().ref().child(`Cash/${uid}`).push(callback);
   }
   static getItemCash (keyshop, uid, callback){
    firebase.database().ref(`Cash/${uid}/${keyshop}`).orderByChild("state").equalTo(1).once('value', (snap)=>{
      let items =[];
      snap.forEach((child) => {
       let item = child.val()
       item['key'] = child.key
       items.push(item);    
      });
      callback(items)
    }) 
 }
   static getDetailCash(uid,callback) {
    var itemDetail =[];
    var itemCash = [];
    var itemDetailShop =[];
    let a = 0;
    let b = 0;
    GetData.getShopItem((itemShop) => {
      itemDetailShop = itemShop
      console.log('Mang Item Shop', itemShop)
      firebase.database().ref(`Cash/${uid}`).once('value', (snap)=>{
        snap.forEach((child) => {
            let itemkey = child.val()
            itemkey['keyitem'] = child.key
            itemCash.push(itemkey)                 
        });
        itemCash.map(e => {
          itemDetailShop.map(d =>{
            if(e.keyshop == d.key){
              let shop = d;
              shop['keyShop'] = e.keyitem;
              itemDetail.push(shop);
            }
          })
        })
        console.log('Mang Item Cash', itemCash)
      
        console.log('Mang Item Detail', itemDetail)          
        callback(items)      
        });
    })
    }
   static getHistoryCash(uid, callback){
    var items =[]
    firebase.database().ref(`Cash/${uid}`).on('value', (snap)=>{
      snap.forEach((child) => {
          let item = child.val()
          item['key'] = child.key
          items.push(item)
      });
      callback(items)
   })
   }    
   static getHistoryCashAdd(uid, callback){
    var items =[]
    firebase.database().ref(`Cash/${uid}`).on('child_added', (snap)=>{
          let item = snap.val()
          item['key'] = snap.key
          items.push(item)
          callback(items)
   })
   console.log('History Add', items);
   }    
   static getHistoryCashChange(uid, key, callback){
    firebase.database().ref(`Cash/${uid}/${key}`).on('value', (snap)=>{
      console.log('History Changed', snap.val());
          callback(snap.val())
   })
   }    
   static getDetailHistory(keyshop,uid, callback){
     var items =[]
    firebase.database().ref(`Cash/${uid}/${keyshop}`).on('value', (snap)=>{
      snap.forEach((child) => {
          let item = child.val()
          item['key'] = child.key
          items.push(item)
      });
      callback(items)
   })
  }
    static setUserInfo(userinfo){
        firebase.database().ref().child(`User/${userinfo.uid}`).set(userinfo)
    }
    static getUserInfo(uid, callback){
        firebase.database().ref(`User/${uid}`).once('value', (userinfo) => {callback(userinfo.val())})
    }
    static getDetailShop(uid, callback) {
       firebase.database().ref(`Shop/${uid}`).once('value', (shopinfo) => {callback(shopinfo.val())})
    }
    static getDataCart (keyshop, uid, callback){
       firebase.database().ref(`CartItem/${uid}/${keyshop}`).on('value', (snap)=>{
         let items =[];
         let arrayPrice = [];
         snap.forEach((child) => {
          let item = child.val()
          item['key'] = child.key
          items.push(item);
         });
         callback(items)
        
       }) 
    }
    static getBanner(callback){
        firebase.database().ref('Banner').once('value', (snap) => {
        let items = [];
        snap.forEach((child) => {
          items.push({
            image: child.val(),
          });
        });
        callback(items)
      })
    }
    static setCategory(callback){
      firebase.database().ref().child('Category').set(callback);
    }
    static getCategories(callback){
        firebase.database().ref('Category').once('value', (snap) => {
        let items = [];
        snap.forEach((child) => {
          items.push({
            category: child.key,
            namecategory: child.val(),
          });
        });
        callback(items.reverse())
      })
    }
    static getItemByCategory(category,callback){
      firebase.database().ref('Menu').orderByChild("categoryItem").equalTo(category).on('value', (snap) => {
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
      firebase.database().ref(`Product/${id}`).on('value', (item) => {callback(item.val())})
    }
    static getItemMall (callback){
      firebase.database().ref('Mall').on('value', (snap) => {
        let items = [];
        snap.forEach((child) => {
          let item = child.val()
          item['key'] = child.key
          items.push(item);
        });
        callback(items)
      })
    }
    static getNewItem (limit,callback) {
      firebase.database().ref('Product').limitToLast(limit).on('value', (snap) => {
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
      firebase.database().ref('Product').limitToFirst(limit).on('value', (snap) => {
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
      firebase.database().ref().child('Product').push(productinfo)
    }
    static pushShop(shopinfo){
        firebase.database().ref().child('Shop').push(shopinfo)
    }
    static pushMenu(menuinfo){
        firebase.database().ref().child("Mall").push(menuinfo)
    }
    static setBanner(bannerInfo){
        firebase.database().ref().child('Banner').set(bannerInfo)
    }
    static getShopItem (callback) {
        firebase.database().ref('Shop').once('value', (snap) => {
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
        firebase.database().ref('Menu').once('value', (snap) => {
          let items = [];
          snap.forEach((child) => {
            let item = child.val()
            item['key'] = child.key
            items.push(item);
          });
          callback(items)
        })
      }
     
  }
  module.exports = GetData;