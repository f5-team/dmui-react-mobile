import React from 'react';
import ReactDOM from 'react-dom';

import App from './example/menu/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


var DateWorkface= {
    //是否润年
    isLeapYear(year) {
        var d = new Date(year, 1, 29);
        return d.getDate() === 29;
    },
    //获取某年多少个月
    getMonth(){
        return [1,2,3,4,5,6,7,8,9,10,11,12];
    },
    //获取某年某个月有多少天
    getMonthDay(year, month) {
        let days = new Date(year, month + 1, 0).getDate()
        return days;
    },
    getSectionYears(min, max){
        return {
            min: min || new Date().getFullYear()- 4,
            max: max || new Date().getFullYear()+ 4
        }
    },
    getSectionHours(min= 0, max= 23, step= 1){
        let HoursData= [];
        for(; min< max; min+= step){
            HoursData.push(min);
        }
        return HoursData;
    },
    getSectionMinute(min= 0, max= 59, step= 1){
        let MinuteData= [];
        for(; min< max; min+= step){
            MinuteData.push(min);
        }
        return MinuteData;
    },
    getData(){
        let sectionYears= this.getSectionYears(), dateData= [];
        for(;sectionYears.min < sectionYears.max; sectionYears.min++){
            this.getMonth().forEach(v=>{
                dateData.push({
                    year: sectionYears.min,
                    month: v,
                    days: this.getMonthDay(sectionYears.min, v),
                    hours: this.getSectionHours(6, 20),
                    minute: this.getSectionMinute(0, 59, 5),
                })
            })
        }
        return dateData;
    }
}

console.log(DateWorkface.getData())

/*

var data= [{
	"id": 12,
	"menuName": "商户管理",
	"parentId": 0,
	"checked": true,
	"permissions": null,
	"children": [{
		"id": 13,
		"menuName": "商户管理",
		"parentId": 12,
		"checked": true,
		"permissions": null,
		"children": [{
			"id": 16,
			"menuName": "新增商户",
			"parentId": 13,
			"checked": true,
			"permissions": [{
				"id": 59,
				"permissionName": "添加商户",
				"menuId": 16,
				"checked": true
			}],
			"children": []
		}, {
			"id": 17,
			"menuName": "商户管理",
			"parentId": 13,
			"checked": true,
			"permissions": [{
				"id": 60,
				"permissionName": "更新商户",
				"menuId": 17,
				"checked": true
			}, {
				"id": 61,
				"permissionName": "查询商户详情",
				"menuId": 17,
				"checked": true
			}, {
				"id": 62,
				"permissionName": "查询商户列表",
				"menuId": 17,
				"checked": true
			}],
			"children": []
		}]
	}, {
		"id": 14,
		"menuName": "店铺管理",
		"parentId": 12,
		"checked": true,
		"permissions": [{
			"id": 54,
			"permissionName": "更新商铺",
			"menuId": 14,
			"checked": true
		}],
		"children": [{
			"id": 18,
			"menuName": "新增店铺",
			"parentId": 14,
			"checked": true,
			"permissions": [{
				"id": 52,
				"permissionName": "添加商铺",
				"menuId": 18,
				"checked": true
			}],
			"children": []
		}, {
			"id": 19,
			"menuName": "店铺查询",
			"parentId": 14,
			"checked": true,
			"permissions": [{
				"id": 55,
				"permissionName": "查询商品详情",
				"menuId": 19,
				"checked": true
			}, {
				"id": 56,
				"permissionName": "查询商铺列表",
				"menuId": 19,
				"checked": true
			}, {
				"id": 57,
				"permissionName": "查询未审核商铺列表",
				"menuId": 19,
				"checked": true
			}, {
				"id": 58,
				"permissionName": "查询审核失败商铺列表",
				"menuId": 19,
				"checked": true
			}],
			"children": []
		}, {
			"id": 20,
			"menuName": "店铺审核",
			"parentId": 14,
			"checked": true,
			"permissions": [{
				"id": 53,
				"permissionName": "商铺审核",
				"menuId": 20,
				"checked": true
			}],
			"children": []
		}]
	}, {
		"id": 15,
		"menuName": "商品管理",
		"parentId": 12,
		"checked": true,
		"permissions": [{
			"id": 48,
			"permissionName": "更新商品",
			"menuId": 15,
			"checked": true
		}],
		"children": [{
			"id": 21,
			"menuName": "新增商品",
			"parentId": 15,
			"checked": true,
			"permissions": [{
				"id": 47,
				"permissionName": "添加商品",
				"menuId": 21,
				"checked": true
			}, {
				"id": 50,
				"permissionName": "更新商品页",
				"menuId": 21,
				"checked": true
			}],
			"children": []
		}, {
			"id": 22,
			"menuName": "商品查询",
			"parentId": 15,
			"checked": true,
			"permissions": [{
				"id": 49,
				"permissionName": "查询商品详情",
				"menuId": 22,
				"checked": true
			}, {
				"id": 51,
				"permissionName": "查询商品列表",
				"menuId": 22,
				"checked": true
			}],
			"children": []
		}]
	}]
}, {
	"id": 23,
	"menuName": "订单管理",
	"parentId": 0,
	"checked": true,
	"permissions": null,
	"children": [{
		"id": 24,
		"menuName": "用户订单管理",
		"parentId": 23,
		"checked": true,
		"permissions": null,
		"children": [{
			"id": 26,
			"menuName": "行程订单",
			"parentId": 24,
			"checked": true,
			"permissions": [{
				"id": 26,
				"permissionName": "行程订单列表查询",
				"menuId": 26,
				"checked": true
			}, {
				"id": 27,
				"permissionName": "行程订单详情查询",
				"menuId": 26,
				"checked": true
			}, {
				"id": 28,
				"permissionName": "行程订单退款查询",
				"menuId": 26,
				"checked": true
			}],
			"children": []
		}, {
			"id": 27,
			"menuName": "求捎带订单 ",
			"parentId": 24,
			"checked": true,
			"permissions": [{
				"id": 29,
				"permissionName": "求稍等订单列表查询",
				"menuId": 27,
				"checked": true
			}, {
				"id": 30,
				"permissionName": "求稍等订单详情查询",
				"menuId": 27,
				"checked": true
			}, {
				"id": 31,
				"permissionName": "求稍等订单退款查询",
				"menuId": 27,
				"checked": true
			}],
			"children": []
		}]
	}, {
		"id": 25,
		"menuName": "用户行程查询",
		"parentId": 23,
		"checked": false,
		"permissions": null,
		"children": [{
			"id": 28,
			"menuName": "用户行程",
			"parentId": 25,
			"checked": false,
			"permissions": null,
			"children": []
		}]
	}]
}, {
	"id": 29,
	"menuName": "运营管理",
	"parentId": 0,
	"checked": true,
	"permissions": null,
	"children": [{
		"id": 30,
		"menuName": "小程序运营管理",
		"parentId": 29,
		"checked": true,
		"permissions": null,
		"children": [{
			"id": 31,
			"menuName": "C端_banner",
			"parentId": 30,
			"checked": true,
			"permissions": [{
				"id": 32,
				"permissionName": "Banner列表查询",
				"menuId": 31,
				"checked": true
			}, {
				"id": 33,
				"permissionName": "Banner创建",
				"menuId": 31,
				"checked": true
			}, {
				"id": 34,
				"permissionName": "Banner更新",
				"menuId": 31,
				"checked": true
			}, {
				"id": 35,
				"permissionName": "Banner删除",
				"menuId": 31,
				"checked": true
			}, {
				"id": 36,
				"permissionName": "Banner详情查询",
				"menuId": 31,
				"checked": true
			}],
			"children": []
		}, {
			"id": 32,
			"menuName": "C端_店铺优选",
			"parentId": 30,
			"checked": true,
			"permissions": [{
				"id": 37,
				"permissionName": "优选店铺列表查询",
				"menuId": 32,
				"checked": true
			}, {
				"id": 38,
				"permissionName": "优选店铺创建",
				"menuId": 32,
				"checked": true
			}, {
				"id": 39,
				"permissionName": "优选店铺更新",
				"menuId": 32,
				"checked": true
			}, {
				"id": 40,
				"permissionName": "优选店铺删除",
				"menuId": 32,
				"checked": true
			}, {
				"id": 41,
				"permissionName": "优选店铺详情查询",
				"menuId": 32,
				"checked": true
			}],
			"children": []
		}, {
			"id": 33,
			"menuName": "C端_弹窗配置",
			"parentId": 30,
			"checked": true,
			"permissions": [{
				"id": 42,
				"permissionName": "弹框列表查询",
				"menuId": 33,
				"checked": true
			}, {
				"id": 43,
				"permissionName": "弹框创建",
				"menuId": 33,
				"checked": true
			}, {
				"id": 44,
				"permissionName": "弹框更新",
				"menuId": 33,
				"checked": true
			}, {
				"id": 45,
				"permissionName": "弹框删除",
				"menuId": 33,
				"checked": true
			}, {
				"id": 46,
				"permissionName": "弹框详情查询",
				"menuId": 33,
				"checked": true
			}],
			"children": []
		}]
	}, {
		"id": 34,
		"menuName": "运营活动配置",
		"parentId": 29,
		"checked": true,
		"permissions": null,
		"children": [{
			"id": 35,
			"menuName": "运营活动管理",
			"parentId": 34,
			"checked": true,
			"permissions": [{
				"id": 63,
				"permissionName": "添加活动",
				"menuId": 35,
				"checked": true
			}, {
				"id": 64,
				"permissionName": "更新活动",
				"menuId": 35,
				"checked": true
			}, {
				"id": 65,
				"permissionName": "查看活动详情",
				"menuId": 35,
				"checked": true
			}, {
				"id": 66,
				"permissionName": "查看活动列表",
				"menuId": 35,
				"checked": true
			}],
			"children": []
		}]
	}, {
		"id": 36,
		"menuName": "红包卡券配置",
		"parentId": 29,
		"checked": true,
		"permissions": null,
		"children": [{
			"id": 37,
			"menuName": "现金红包管理",
			"parentId": 36,
			"checked": true,
			"permissions": [{
				"id": 67,
				"permissionName": "添加现金红包",
				"menuId": 37,
				"checked": true
			}, {
				"id": 68,
				"permissionName": "修改现金红包",
				"menuId": 37,
				"checked": true
			}, {
				"id": 69,
				"permissionName": "查询现金红包详情",
				"menuId": 37,
				"checked": true
			}, {
				"id": 70,
				"permissionName": "查询现金红包列表",
				"menuId": 37,
				"checked": true
			}],
			"children": []
		}, {
			"id": 38,
			"menuName": "C端卡券管理",
			"parentId": 36,
			"checked": true,
			"permissions": [{
				"id": 71,
				"permissionName": "添加卡券",
				"menuId": 38,
				"checked": true
			}, {
				"id": 72,
				"permissionName": "修改卡券",
				"menuId": 38,
				"checked": true
			}, {
				"id": 73,
				"permissionName": "查询卡券详情",
				"menuId": 38,
				"checked": true
			}, {
				"id": 74,
				"permissionName": "查询卡券列表",
				"menuId": 38,
				"checked": true
			}],
			"children": []
		}]
	}]
}, {
	"id": 39,
	"menuName": "数据中心",
	"parentId": 0,
	"checked": false,
	"permissions": [{
		"id": 75,
		"permissionName": "商家端运营数据查询",
		"menuId": 39,
		"checked": true
	}, {
		"id": 76,
		"permissionName": "C端运营数据查询",
		"menuId": 39,
		"checked": true
	}],
	"children": [{
		"id": 40,
		"menuName": "运营数据",
		"parentId": 39,
		"checked": false,
		"permissions": null,
		"children": []
	}]
}, {
	"id": 41,
	"menuName": "系统设置",
	"parentId": 0,
	"checked": true,
	"permissions": null,
	"children": [{
		"id": 42,
		"menuName": "参数设置",
		"parentId": 41,
		"checked": true,
		"permissions": null,
		"children": [{
			"id": 43,
			"menuName": "店铺/商品分类管理",
			"parentId": 42,
			"checked": true,
			"permissions": [{
				"id": 81,
				"permissionName": "添加品类",
				"menuId": 43,
				"checked": true
			}],
			"children": []
		}, {
			"id": 44,
			"menuName": "店铺/商品标签管理",
			"parentId": 42,
			"checked": true,
			"permissions": [{
				"id": 77,
				"permissionName": "添加标签",
				"menuId": 44,
				"checked": true
			}, {
				"id": 78,
				"permissionName": "删除标签",
				"menuId": 44,
				"checked": true
			}, {
				"id": 79,
				"permissionName": "更新标签状态",
				"menuId": 44,
				"checked": true
			}, {
				"id": 80,
				"permissionName": "获取标签列表",
				"menuId": 44,
				"checked": true
			}],
			"children": []
		}]
	}, {
		"id": 45,
		"menuName": "权限管理",
		"parentId": 41,
		"checked": true,
		"permissions": null,
		"children": [{
			"id": 46,
			"menuName": "角色管理",
			"parentId": 45,
			"checked": true,
			"permissions": [{
				"id": 1,
				"permissionName": "新增角色",
				"menuId": 46,
				"checked": true
			}, {
				"id": 2,
				"permissionName": "修改角色",
				"menuId": 46,
				"checked": true
			}, {
				"id": 3,
				"permissionName": "删除角色",
				"menuId": 46,
				"checked": true
			}, {
				"id": 4,
				"permissionName": "权限分配保存",
				"menuId": 46,
				"checked": true
			}, {
				"id": 5,
				"permissionName": "查询角色",
				"menuId": 46,
				"checked": true
			}, {
				"id": 6,
				"permissionName": "权限分配查询",
				"menuId": 46,
				"checked": true
			}],
			"children": []
		}, {
			"id": 47,
			"menuName": "用户管理",
			"parentId": 45,
			"checked": true,
			"permissions": [{
				"id": 15,
				"permissionName": "查询所有角色",
				"menuId": 47,
				"checked": true
			}, {
				"id": 16,
				"permissionName": "查询用户角色",
				"menuId": 47,
				"checked": true
			}, {
				"id": 18,
				"permissionName": "新增用户",
				"menuId": 47,
				"checked": true
			}, {
				"id": 19,
				"permissionName": "禁用用户",
				"menuId": 47,
				"checked": true
			}, {
				"id": 20,
				"permissionName": "启用用户",
				"menuId": 47,
				"checked": true
			}, {
				"id": 21,
				"permissionName": "删除用户",
				"menuId": 47,
				"checked": true
			}, {
				"id": 22,
				"permissionName": "重置密码",
				"menuId": 47,
				"checked": true
			}, {
				"id": 23,
				"permissionName": "修改密码",
				"menuId": 47,
				"checked": true
			}, {
				"id": 24,
				"permissionName": "查询用户",
				"menuId": 47,
				"checked": true
			}, {
				"id": 25,
				"permissionName": "查询单个用户",
				"menuId": 47,
				"checked": true
			}],
			"children": []
		}, {
			"id": 48,
			"menuName": "权限菜单维护",
			"parentId": 45,
			"checked": true,
			"permissions": [{
				"id": 7,
				"permissionName": "新增菜单",
				"menuId": 48,
				"checked": true
			}, {
				"id": 8,
				"permissionName": "修改菜单",
				"menuId": 48,
				"checked": true
			}, {
				"id": 9,
				"permissionName": "删除菜单",
				"menuId": 48,
				"checked": true
			}, {
				"id": 10,
				"permissionName": "新增功能权限",
				"menuId": 48,
				"checked": true
			}, {
				"id": 11,
				"permissionName": "修改功能权限",
				"menuId": 48,
				"checked": true
			}, {
				"id": 12,
				"permissionName": "删除功能权限",
				"menuId": 48,
				"checked": true
			}, {
				"id": 13,
				"permissionName": "查询菜单",
				"menuId": 48,
				"checked": true
			}, {
				"id": 14,
				"permissionName": "查询功能权限",
				"menuId": 48,
				"checked": true
			}],
			"children": []
		}]
	}]
}, {
	"id": 51,
	"menuName": "测试添加一级菜单",
	"parentId": 0,
	"checked": false,
	"permissions": [{
		"id": 82,
		"permissionName": "测试添加权限按钮",
		"menuId": 51,
		"checked": false
	}],
	"children": []
}, {
	"id": 52,
	"menuName": "第二个一级菜单修改一下",
	"parentId": 0,
	"checked": false,
	"permissions": [{
		"id": 83,
		"permissionName": "测试添加权限按钮",
		"menuId": 52,
		"checked": false
	}, {
		"id": 84,
		"permissionName": "再加一个",
		"menuId": 52,
		"checked": false
	}],
	"children": []
}];

function FacityMenu(data){
    let list= [];
    data.map(v=>{    
        if(v.permissions instanceof Array || v.children instanceof Array){
            v.children= FacityMenu((v.children || []).concat(v.permissions || []));
        } 
        list.push( {
            id: v.id,
            label: v.menuName || v.permissionName,
            children: v.children || []
        })
    });
    return list;
}

console.log(FacityMenu(data))

*/