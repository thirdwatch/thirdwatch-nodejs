/**
 * Thirdwatch API
 * The first version of the Thirdwatch API is an exciting step forward towards making it easier for developers to pass data to Thirdwatch.  Once you've [registered your website/app](https://thirdwatch.ai) it's easy to start sending data to Thirdwatch.  All endpoints are only accessible via https and are located at `api.thirdwatch.ai`. For instance: you can send event at the moment by ```HTTP POST``` Request to the following URL with your API key in ```Header``` and ```JSON``` data in request body. ```   https://api.thirdwatch.ai/event/v1 ``` Every API request must contain ```API Key``` in header value ```X-THIRDWATCH-API-KEY```  Every event must contain your ```_userId``` (if this is not available, you can alternatively provide a ```_sessionId``` value also in ```_userId```).  JavaScript Fingerprinting module for capturing unique devices and tracking user interaction.  This script will identify unique devices with respect to the browser. For e.g., if chrome is opened in normal mode a unique device id is generated and this will be same if chrome is opened in incognito mode or reinstalled.  Paste the below script onto your webpage, just after the opening `<body>` tag. This script should be added to the page which is accessed externally by the user of your website. For e.g., If you want to track three different webpages then paste the below script onto each webpage, just after the opening `<body>` tag. This script should not be added onto internal tools or admin panels. ```   &lt;script id=\"thirdwatch\"     data-session-cookie-name=\"&lt;cookie_name&gt;\"     data-session-id-value=\"&lt;session_id&gt;\"     data-user-id=\"&lt;user_id&gt;\"     data-app-secret=\"&lt;app_secret&gt;\"     data-is-track-pageview=\"true\"&gt; (function() {         var loadDeviceJs = function() {         var element = document.createElement(\"script\");         element.async = 1;         element.src = \"https://cdn.thirdwatch.ai/tw.min.js\";         document.body.appendChild(element);         };         if (window.addEventListener) {              window.addEventListener(\"load\", loadDeviceJs, false);         } else if (window.attachEvent) {         window.attachEvent(\"onload\", loadDeviceJs);         }     })();   &lt;/script&gt; ``` * `data-session-cookie-name` -- The cookie name where you are saving the unique session id. We will pick the session id by reading its value from the cookie name. (Optional) * `data-session-id-value` -- In case you are not passing `data-session-cookie-name` than you can put session id directly in this parameter. In absence of both `data-session-cookie-name` and `data-session-id-value`, our system will generate a session Id. (Optional) * `data-user-id` -- Unique user id at your end. This can be email id or primary key in the database. In case of guest user, you can insert session Id here. * `data-app-secret` -- Unique App secret generated for you by Thirdwatch. * `data-is-track-pageview` -- If this is set to true, then the url on which this script is running will be sent to Thirdwatch, else the url will not be captured.   The Score API is use to get an up to date cutomer trust score after you have sent transaction event and order successful. This API will provide the riskiness score of the order with reasons. Some examples of when you may want to check the score are before:    - Before Shippement of a package   - Finalizing a money transfer   - Giving access to a prearranged vacation rental   - Sending voucher on mail  ```   https://api.thirdwatch.ai/neo/v1/score?api_key=<your api key>&order_id=<Order id> ```  According to Score you can decide to take action Approve or Reject. Orders with score more than 70 will consider as Riskey orders. We'll provide some reasons also in rules section.   ``` {   \"order_id\": \"OCT45671\",   \"user_id\": \"ajay_245\",   \"order_timestamp\": \"2017-05-09T09:40:45.717Z\",   \"score\": 82,   \"flag\": \"red\",     -\"reasons\": [     {         \"name\": \"_numOfFailedTransactions\",         \"display_name\": \"Number of failed transactions\",         \"flag\": \"green\",         \"value\": \"0\",         \"is_display\": true       },       {         \"name\": \"_accountAge\",         \"display_name\": \"Account age\",         \"flag\": \"red\",         \"value\": \"0\",         \"is_display\": true       },       {         \"name\": \"_numOfOrderSameIp\",         \"display_name\": \"Number of orders from same IP\",         \"flag\": \"red\",         \"value\": \"11\",         \"is_display\": true       }     ] } ``` 
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BillingAddress', 'model/CustomInfo', 'model/PaymentMethod', 'model/Promotion', 'model/ShippingAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingAddress'), require('./CustomInfo'), require('./PaymentMethod'), require('./Promotion'), require('./ShippingAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.thirdwatch_api) {
      root.thirdwatch_api = {};
    }
    root.thirdwatch_api.CreateAccount = factory(root.thirdwatch_api.ApiClient, root.thirdwatch_api.BillingAddress, root.thirdwatch_api.CustomInfo, root.thirdwatch_api.PaymentMethod, root.thirdwatch_api.Promotion, root.thirdwatch_api.ShippingAddress);
  }
}(this, function(ApiClient, BillingAddress, CustomInfo, PaymentMethod, Promotion, ShippingAddress) {
  'use strict';




  /**
   * The CreateAccount model module.
   * @module model/CreateAccount
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>CreateAccount</code>.
   * @alias module:model/CreateAccount
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>CreateAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAccount} obj Optional instance to populate.
   * @return {module:model/CreateAccount} The populated <code>CreateAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_userId')) {
        obj['_userId'] = ApiClient.convertToType(data['_userId'], 'String');
      }
      if (data.hasOwnProperty('_sessionId')) {
        obj['_sessionId'] = ApiClient.convertToType(data['_sessionId'], 'String');
      }
      if (data.hasOwnProperty('_deviceIp')) {
        obj['_deviceIp'] = ApiClient.convertToType(data['_deviceIp'], 'String');
      }
      if (data.hasOwnProperty('_originTimestamp')) {
        obj['_originTimestamp'] = ApiClient.convertToType(data['_originTimestamp'], 'String');
      }
      if (data.hasOwnProperty('_userEmail')) {
        obj['_userEmail'] = ApiClient.convertToType(data['_userEmail'], 'String');
      }
      if (data.hasOwnProperty('_firstName')) {
        obj['_firstName'] = ApiClient.convertToType(data['_firstName'], 'String');
      }
      if (data.hasOwnProperty('_lastName')) {
        obj['_lastName'] = ApiClient.convertToType(data['_lastName'], 'String');
      }
      if (data.hasOwnProperty('_phone')) {
        obj['_phone'] = ApiClient.convertToType(data['_phone'], 'String');
      }
      if (data.hasOwnProperty('_age')) {
        obj['_age'] = ApiClient.convertToType(data['_age'], 'String');
      }
      if (data.hasOwnProperty('_gender')) {
        obj['_gender'] = ApiClient.convertToType(data['_gender'], 'String');
      }
      if (data.hasOwnProperty('_referralCode')) {
        obj['_referralCode'] = ApiClient.convertToType(data['_referralCode'], 'String');
      }
      if (data.hasOwnProperty('_referrerUserId')) {
        obj['_referrerUserId'] = ApiClient.convertToType(data['_referrerUserId'], 'String');
      }
      if (data.hasOwnProperty('_billingAddress')) {
        obj['_billingAddress'] = BillingAddress.constructFromObject(data['_billingAddress']);
      }
      if (data.hasOwnProperty('_shippingAddress')) {
        obj['_shippingAddress'] = ShippingAddress.constructFromObject(data['_shippingAddress']);
      }
      if (data.hasOwnProperty('_paymentMethods')) {
        obj['_paymentMethods'] = ApiClient.convertToType(data['_paymentMethods'], [PaymentMethod]);
      }
      if (data.hasOwnProperty('_promotions')) {
        obj['_promotions'] = ApiClient.convertToType(data['_promotions'], [Promotion]);
      }
      if (data.hasOwnProperty('_socialSignOnType')) {
        obj['_socialSignOnType'] = ApiClient.convertToType(data['_socialSignOnType'], 'String');
      }
      if (data.hasOwnProperty('_emailConfirmedStatus')) {
        obj['_emailConfirmedStatus'] = ApiClient.convertToType(data['_emailConfirmedStatus'], 'String');
      }
      if (data.hasOwnProperty('_phoneConfirmedStatus')) {
        obj['_phoneConfirmedStatus'] = ApiClient.convertToType(data['_phoneConfirmedStatus'], 'String');
      }
      if (data.hasOwnProperty('_isNewsletterSubscribed')) {
        obj['_isNewsletterSubscribed'] = ApiClient.convertToType(data['_isNewsletterSubscribed'], 'Boolean');
      }
      if (data.hasOwnProperty('_accountStatus')) {
        obj['_accountStatus'] = ApiClient.convertToType(data['_accountStatus'], 'String');
      }
      if (data.hasOwnProperty('_facebookId')) {
        obj['_facebookId'] = ApiClient.convertToType(data['_facebookId'], 'String');
      }
      if (data.hasOwnProperty('_googleId')) {
        obj['_googleId'] = ApiClient.convertToType(data['_googleId'], 'String');
      }
      if (data.hasOwnProperty('_twitterId')) {
        obj['_twitterId'] = ApiClient.convertToType(data['_twitterId'], 'String');
      }
      if (data.hasOwnProperty('_customInfo')) {
        obj['_customInfo'] = CustomInfo.constructFromObject(data['_customInfo']);
      }
    }
    return obj;
  }

  /**
   * The user's account ID according to your systems. Note that user IDs are case sensitive.
   * @member {String} _userId
   */
  exports.prototype['_userId'] = undefined;
  /**
   * The user's current session ID, used to tie a user's action before and after login or account creation. Required if no user_id values is provided.
   * @member {String} _sessionId
   */
  exports.prototype['_sessionId'] = undefined;
  /**
   * IP address of the request made by the user. Recommended for historical backfills and customers with mobile apps.
   * @member {String} _deviceIp
   */
  exports.prototype['_deviceIp'] = undefined;
  /**
   * Represents the time the event occured in your system. Send as a UNIX timestamp in milliseconds in string.
   * @member {String} _originTimestamp
   */
  exports.prototype['_originTimestamp'] = undefined;
  /**
   * Email of the user creating this order. Note - If the user's email is also their account ID in your system, set both the userId and userEmail fields to their email address.
   * @member {String} _userEmail
   */
  exports.prototype['_userEmail'] = undefined;
  /**
   * Provide the first name associated with the user here.
   * @member {String} _firstName
   */
  exports.prototype['_firstName'] = undefined;
  /**
   * Provide the last name associated with the user here.
   * @member {String} _lastName
   */
  exports.prototype['_lastName'] = undefined;
  /**
   * The primary phone number of the user associated with this account. Provide the phone number as a string.
   * @member {String} _phone
   */
  exports.prototype['_phone'] = undefined;
  /**
   * Age of the user e.g. \"25\"
   * @member {String} _age
   */
  exports.prototype['_age'] = undefined;
  /**
   * Gender of the user e.g. \"_male\", \"_female\" or \"_trans\"
   * @member {String} _gender
   */
  exports.prototype['_gender'] = undefined;
  /**
   * Code or promotion used by the user while creating account.
   * @member {String} _referralCode
   */
  exports.prototype['_referralCode'] = undefined;
  /**
   * The ID of the user that referred the current user to your business. This field is required for detecting referral fraud.
   * @member {String} _referrerUserId
   */
  exports.prototype['_referrerUserId'] = undefined;
  /**
   * @member {module:model/BillingAddress} _billingAddress
   */
  exports.prototype['_billingAddress'] = undefined;
  /**
   * @member {module:model/ShippingAddress} _shippingAddress
   */
  exports.prototype['_shippingAddress'] = undefined;
  /**
   * The payment information associated with this account. Represented as an array of nested payment_method objects containing payment type, payment gateway, credit card bin, etc.
   * @member {Array.<module:model/PaymentMethod>} _paymentMethods
   */
  exports.prototype['_paymentMethods'] = undefined;
  /**
   * The list of promotions that apply to this account. You can add one or more promotions when creating or updating an order. Represented as a JSON array of promotion objects. You can also separately add promotions to the account via the addPromotion event.
   * @member {Array.<module:model/Promotion>} _promotions
   */
  exports.prototype['_promotions'] = undefined;
  /**
   * If the user logged in with a social identify provider, give the name here. e.g. _google, _facebook, _twitter, _linkedin, _other
   * @member {String} _socialSignOnType
   */
  exports.prototype['_socialSignOnType'] = undefined;
  /**
   * Status of email verification. e.g. _success, _failure, _pending
   * @member {String} _emailConfirmedStatus
   */
  exports.prototype['_emailConfirmedStatus'] = undefined;
  /**
   * Status of phone verification. e.g. _success, _failure, _pending
   * @member {String} _phoneConfirmedStatus
   */
  exports.prototype['_phoneConfirmedStatus'] = undefined;
  /**
   * Is user subscribed for newsletter. e.g. true, false
   * @member {Boolean} _isNewsletterSubscribed
   */
  exports.prototype['_isNewsletterSubscribed'] = undefined;
  /**
   * Current status of account, e.g. _active, _inactive
   * @member {String} _accountStatus
   */
  exports.prototype['_accountStatus'] = undefined;
  /**
   * Facebook user id or token of the user. This can help to varify his social identity.
   * @member {String} _facebookId
   */
  exports.prototype['_facebookId'] = undefined;
  /**
   * Google user id or token of the user. This can help to varify his social identity.
   * @member {String} _googleId
   */
  exports.prototype['_googleId'] = undefined;
  /**
   * Twitter handle or token of the user. This can help to varify his social identity.
   * @member {String} _twitterId
   */
  exports.prototype['_twitterId'] = undefined;
  /**
   * @member {module:model/CustomInfo} _customInfo
   */
  exports.prototype['_customInfo'] = undefined;



  return exports;
}));


