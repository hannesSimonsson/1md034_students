/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
    el: '#vm',
    data: {
        orders: {},
        order: {}
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            document.getElementById("orderConfirmation").innerHTML = "";
            document.getElementById("orderSummary").innerHTML = "";

            console.log(this.order);
            socket.emit("addOrder", { orderId: this.getNext(),
                                      details: {x: this.order.x, 
                                                y: this.order.y},
                                      orderItems: summary(),
                                      orderInfo: info()
            });
        },
        displayOrder: function () {
            var offset = {x: event.currentTarget.getBoundingClientRect().left, 
                          y: event.currentTarget.getBoundingClientRect().top};
            this.order = {x: event.clientX - 10 - offset.x, 
                          y: event.clientY - 10 - offset.y};
            
            console.log("coordinates");
        }
    }
});
