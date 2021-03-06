module.exports = {
  /**file.move */
  move(quick_object) {
    return console.log("move暂不支持！")
  }
  /**file.copy */
  ,
  copy(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_srcUri=quick_object.srcUri
    var quick_srcUri=quick_object.dstUri
    ///////////////////////////
    var wx_object = {};
    if(quick_srcUri){
      wx_object.srcPath = quick_srcUri
    }
    if(quick_dstUri){
      wx_object.destPath = quick_srcUri
    }
      wx_object.success = function(wx_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      wx_object.fail = function(wx_res) {
        var quick_res = {
          fail: 202
        };
        for (var wx_res_key in wx_res) {
          var wx_res_value = wx_res[wx_res_key];
          switch (wx_res_key) {
            case "errMsg":
              break;
          }
        }
        if (quick_fail) {
          quick_fail(wx_res);
        }
        if (quick_complete) {
          quick_complete(wx_res);
        }
      };
      wx.getFileSystemManager().copyFile(wx_object)
  }

  /**file.list */
  ,
  list(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri
    ///////////////////////////////////////////////
    var wx_object = {};
    if(quick_uri){
      wx_object.dirPath=quick_uri
    }
      wx_object.success = function(wx_res) {
        var quick_res = {};
        quick_res.fileList = wx_res.files
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      wx_object.fail = function(wx_res) {
        if (quick_fail) {
          quick_fail(wx_res);
        }
        if (quick_complete) {
          quick_complete(wx_res);
        }
      };
      wx.getFileSystemManager().readdir(wx_object)
  }

  /**file.get */
  ,
  get(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri;
    var quick_recursive=quick_object.recursive||false 
    ///////////////////////////////////////////////
      var wx_object = {};
      if(quick_uri){
        wx_object.filePath=quick_uri
      }
        wx_object.success = function(wx_res) {
          var quick_res = {
            uri:wx_object.filePath,
            lastModifiedTime,
            type,
            subFiles
          };
          quick_res.length = wx_res.size
          if (quick_success) {
            quick_success(quick_res);
          }
          if (quick_complete) {
            quick_complete(quick_res);
          }
        };
        wx_object.fail = function(wx_res) {
          if (quick_fail) {
            quick_fail(wx_res);
          }
          if (quick_complete) {
            quick_complete(wx_res);
          }
        };
        wx.getFileSystemManager().getFileInfo(wx_object)
    }

    /**file.delete */
    ,
  delete(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri;
    var wx_object = {};
    if(quick_uri){
     wx_object.filePath=quick_uri
    }
      wx_object.success = function(wx_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      wx_object.fail = function(wx_res) {
        if (quick_fail) {
          quick_fail(wx_res);
        }
        if (quick_complete) {
          quick_complete(wx_res);
        }
      };
      wx.getFileSystemManager().unlink(wx_object)
  }

  /**file.writeText */
  ,
  writeText(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_text=quick_object.text;
    var quick_encoding=quick_object.encoding||UTF-8;
    var quick_append=quick_object.append||false;
    var wx_object = {};
    if(quick_uri){
      wx_object.filePath=quick_uri
    }
    if(quick_text){
      wx_object.data=quick_text
    }
    if(quick_encoding){
      wx_object.encoding =quick_encoding
    }
      wx_object.success = function(wx_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      wx_object.fail = function(wx_res) {
        if (quick_fail) {
          quick_fail(wx_res);
        }
        if (quick_complete) {
          quick_complete(wx_res);
        }
      };
      wx.getFileSystemManager().writeFile(wx_object)
  }

  /**file.writeArrayBuffer */
  ,
  writeArrayBuffer(quick_object) {
    return console.log("暂不支持！")
  }

  /**file.readText */
  ,
  readText(quick_object) {}

  /**file.readArrayBuffer */
  ,
  readArrayBuffer(quick_object) {}

  /**file.access */
  ,
  access(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri
    //////////////////////////////////////
    var wx_object = {};
    if(quick_uri){
      wx_object.path=quick_uri
    }
      wx_object.success = function(wx_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      wx_object.fail = function(wx_res) {
        if (quick_fail) {
          quick_fail(wx_res);
        }
        if (quick_complete) {
          quick_complete(wx_res);
        }
      };
      wx.getFileSystemManager().access(wx_object)
  }

  /**file.mkdir */
  ,
  mkdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_recursive =quick_object.recursive||false;
    quick_object =null;
    ///////////////////////////////////////////////
    var wx_object = {};
    if(quick_uri){
      wx_object.dirPath=quick_uri
    }
    if(quick_recursive){
      wx_object.recursive=quick_recursive
    }
      wx_object.success = function(wx_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      wx_object.fail = function(wx_res) {
        if (quick_fail) {
          quick_fail(wx_res);
        }
        if (quick_complete) {
          quick_complete(wx_res);
        }
      };
      wx.getFileSystemManager().mkdir(wx_object)
  }

  /**file.rmdir */
  ,
  rmdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_recursive =quick_object.recursive||false;
    quick_object =null;
    ///////////////////////////////////////////////
    var wx_object = {};
    if(quick_uri){
      wx_object.dirPath=quick_uri
    }
    if(quick_recursive){
      wx_object.recursive=quick_recursive
    }
      wx_object.success = function(wx_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      wx_object.fail = function(wx_res) {
        if (quick_fail) {
          quick_fail(wx_res);
        }
        if (quick_complete) {
          quick_complete(wx_res);
        }
      };
      wx.getFileSystemManager().rmdir(wx_object)
  }
}