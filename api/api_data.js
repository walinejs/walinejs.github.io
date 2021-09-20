define({ "api": [
  {
    "type": "GET",
    "url": "/comment",
    "title": "Get comment list for client",
    "group": "Comment",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>comment url path</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": "<p>page size</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>return current comments list page</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>to  return error message if error</p>"
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>comments list</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.nick",
            "description": "<p>comment user nick name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.mail",
            "description": "<p>comment user mail md5</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.link",
            "description": "<p>comment user link</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.objectId",
            "description": "<p>comment id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.browser",
            "description": "<p>comment user browser</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.os",
            "description": "<p>comment user os</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.insertedAt",
            "description": "<p>comment created time</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.avatar",
            "description": "<p>comment user avatar</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>comment login user type</p>"
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data.children",
            "description": "<p>children comments list</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.nick",
            "description": "<p>comment user nick name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.mail",
            "description": "<p>comment user mail md5</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.link",
            "description": "<p>comment user link</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.objectId",
            "description": "<p>comment id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.browser",
            "description": "<p>comment user browser</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.os",
            "description": "<p>comment user os</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.insertedAt",
            "description": "<p>comment created time</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.avatar",
            "description": "<p>comment user avatar</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.children.type",
            "description": "<p>comment login user type</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/comment.js",
    "groupTitle": "Comment",
    "name": "GetComment"
  },
  {
    "type": "GET",
    "url": "/comment?type=count",
    "title": "Get comment count for articles",
    "group": "Comment",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>a array string join by comma just like <code>a</code> or <code>a,b</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Single Path Response:",
          "content": "300",
          "type": "Number"
        },
        {
          "title": "Multiple Path Response:",
          "content": "[300, 100]",
          "type": "Number"
        }
      ]
    },
    "filename": "packages/server/src/logic/comment.js",
    "groupTitle": "Comment",
    "name": "GetCommentTypeCount"
  },
  {
    "type": "GET",
    "url": "/comment?type=list",
    "title": "Get comment list for admin",
    "group": "Comment",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": "<p>page size</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>0</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>return error message if error</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.page",
            "description": "<p>comments list current page</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.pageSize",
            "description": "<p>comments list page size</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.totalPages",
            "description": "<p>comments list total pages</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.spamCount",
            "description": "<p>spam comments count</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.waitingCount",
            "description": "<p>waiting comments count</p>"
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data.data",
            "description": "<p>comments list data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.ip",
            "description": "<p>comment user ip address</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.nick",
            "description": "<p>comment user nick name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.mail",
            "description": "<p>comment user mail md5</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.link",
            "description": "<p>comment user link</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.objectId",
            "description": "<p>comment id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.status",
            "description": "<p>comment status, approved, waiting or spam</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.ua",
            "description": "<p>comment user agent</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.insertedAt",
            "description": "<p>comment created time</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.avatar",
            "description": "<p>comment user avatar</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.data.url",
            "description": "<p>comment article link</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/comment.js",
    "groupTitle": "Comment",
    "name": "GetCommentTypeList"
  },
  {
    "type": "GET",
    "url": "/comment?type=recent",
    "title": "Get recent comments",
    "group": "Comment",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>return comments number, default value is 10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "response",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.nick",
            "description": "<p>comment user nick name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.mail",
            "description": "<p>comment user mail md5</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.link",
            "description": "<p>comment user link</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.objectId",
            "description": "<p>comment id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.browser",
            "description": "<p>comment user browser</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.os",
            "description": "<p>comment user os</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.insertedAt",
            "description": "<p>comment created time</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.avatar",
            "description": "<p>comment user avatar</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>comment login user type</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/comment.js",
    "groupTitle": "Comment",
    "name": "GetCommentTypeRecent"
  },
  {
    "type": "POST",
    "url": "/comment",
    "title": "post comment",
    "group": "Comment",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>post comment user nick name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>post comment user mail address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>post comment user link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>post comment text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>the artcile url path of comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ua",
            "description": "<p>browser user agent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>parent comment id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rid",
            "description": "<p>root comment id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "at",
            "description": "<p>parent comment user nick name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>0</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>return error message if error</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>return comment data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.nick",
            "description": "<p>comment user nick name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.mail",
            "description": "<p>comment user mail md5</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.link",
            "description": "<p>comment user link</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.objectId",
            "description": "<p>comment id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.browser",
            "description": "<p>comment user browser</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.os",
            "description": "<p>comment user os</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.insertedAt",
            "description": "<p>comment created time</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.avatar",
            "description": "<p>comment user avatar</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>comment login user type</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/comment.js",
    "groupTitle": "Comment",
    "name": "PostComment"
  },
  {
    "type": "GET",
    "url": "/oauth/github",
    "title": "github oauth api",
    "group": "OAuth",
    "version": "0.0.1",
    "filename": "packages/server/src/logic/oauth.js",
    "groupTitle": "OAuth",
    "name": "GetOauthGithub"
  },
  {
    "type": "DELETE",
    "url": "/token",
    "title": "user logout",
    "group": "User",
    "version": "0.0.1",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>0</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>return error message if error</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/token.js",
    "groupTitle": "User",
    "name": "DeleteToken"
  },
  {
    "type": "GET",
    "url": "/token",
    "title": "get login user info",
    "group": "User",
    "version": "0.0.1",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>0</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>return error message if error</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>user info</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.avatar",
            "description": "<p>user avatar</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>user register time</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.display_name",
            "description": "<p>user nick name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.emal",
            "description": "<p>user email address</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.github",
            "description": "<p>user github account name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.mailMd5",
            "description": "<p>user mail md5</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.objectId",
            "description": "<p>user id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>user type, administrator or guest</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>user link</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/token.js",
    "groupTitle": "User",
    "name": "GetToken"
  },
  {
    "type": "POST",
    "url": "/token",
    "title": "user login",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>login user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>login user password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>0</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>return error message if error</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/token.js",
    "groupTitle": "User",
    "name": "PostToken"
  },
  {
    "type": "POST",
    "url": "/user",
    "title": "user register",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "display_name",
            "description": "<p>user nick name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>user link</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>0</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>return error message if error</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/user.js",
    "groupTitle": "User",
    "name": "PostUser"
  },
  {
    "type": "PUT",
    "url": "/user",
    "title": "update user profile",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "display_name",
            "description": "<p>user new nick name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>user new link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "github",
            "description": "<p>user github account name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>0</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>return error message if error</p>"
          }
        ]
      }
    },
    "filename": "packages/server/src/logic/user.js",
    "groupTitle": "User",
    "name": "PutUser"
  }
] });
