function menuItems(menu) {
    var myElement = document.getElementById("wrapper");
    
    for (var item in menu) {
        var div = document.createElement("div");
        myElement.appendChild(div);

        var listHeading = document.createElement("h2");
        var headingValue = document.createTextNode(menu[item].name);
        listHeading.appendChild(headingValue);
        div.appendChild(listHeading);

        var listImg = document.createElement("img");
        listImg.src = menu[item].img;
        div.appendChild(listImg);
        
        var list = document.createElement("ul");
        div.appendChild(list);

        var listItem1 = document.createElement("li");
        var listValue1 = document.createTextNode(menu[item].kCal + "kCal");
        listItem1.appendChild(listValue1);
        list.appendChild(listItem1);

        if (menu[item].lactose) {
            var span1 = document.createElement("span");
            span1.id = "bold";

            var listItem2 = document.createElement("li");
            var listValue2 = document.createTextNode("Contains");
            var listValue21 = document.createTextNode(" lactose");
            
            span1.appendChild(listValue21);
            listItem2.appendChild(listValue2);
            listItem2.appendChild(span1);
            list.appendChild(listItem2);
        }
        else {
            list.appendChild(document.createElement("br"));
        }
        
        if (menu[item].gluten) {
            var span2 = document.createElement("span");
            span2.id = "bold";

            var listItem3 = document.createElement("li");
            var listValue3 = document.createTextNode("Contains");
            var listValue31 = document.createTextNode(" gluten");
            
            span2.appendChild(listValue31);
            listItem3.appendChild(listValue3);
            listItem3.appendChild(span2);
            list.appendChild(listItem3);
        }
        else {
            list.appendChild(document.createElement("br"));
        }
        
        var span3 = document.createElement("span");
        span3.id = "bold";
        span3.appendChild(document.createTextNode("Add "));
        div.appendChild(span3);

        var checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.id = "c"+ item;
        checkbox.value = menu[item].name;
        div.appendChild(checkbox);
    }
}
menuItems(food);

function info() {
    var radioValue = "";
    if (document.getElementById("r1").checked) {
        radioValue = document.getElementById("r1").value;
    }
    if (document.getElementById("r2").checked) {
        radioValue = document.getElementById("r2").value;
    }
    if (document.getElementById("r3").checked) {
        radioValue = document.getElementById("r3").value;
    }
    if (document.getElementById("r4").checked) {
        radioValue = document.getElementById("r4").value;
    }
    var customerInfo = [
        document.getElementById("full").value,
        document.getElementById("email").value,
        /*document.getElementById("street").value,
        document.getElementById("house").value,*/
        document.getElementById("payment").value,
        radioValue
    ]

    var order = document.getElementById("orderConfirmation");
    var heading1 = document.createElement("h2");
    var heading2 = document.createElement("h3");
    order.appendChild(heading1);
    order.appendChild(heading2);

    var orderHeading = document.createTextNode("Order confirmation");
    var orderSub = document.createTextNode("Customer details");

    heading1.appendChild(orderHeading);
    heading2.appendChild(orderSub);

    var text = document.createElement("p");
    order.appendChild(text);

    for (i in customerInfo) {
        var values = document.createTextNode(customerInfo[i]);
        text.appendChild(values);
        text.appendChild(document.createElement("br"));
    }

    return customerInfo;
}

function summary() {
    if (document.getElementById("c0").checked || 
        document.getElementById("c1").checked || 
        document.getElementById("c2").checked) {
        var sum = document.getElementById("orderSummary");
        var heading = document.createElement("h3");
        sum.appendChild(heading)

        var sumHeading = document.createTextNode("Order Summary");
        heading.appendChild(sumHeading);

        var list = document.createElement("ul");
        sum.appendChild(list);
    }

    var hamburger = [];

    if (document.getElementById("c0").checked) {
        var listItem = document.createElement("li");
        list.appendChild(listItem);

        listItem.appendChild(document.createTextNode(document.getElementById("c0").value));

        hamburger.push(document.getElementById("c0").value);
    }
    if (document.getElementById("c1").checked) {
        var listItem = document.createElement("li");
        list.appendChild(listItem);

        listItem.appendChild(document.createTextNode(document.getElementById("c1").value));

        hamburger.push(document.getElementById("c1").value);
    }
    if (document.getElementById("c2").checked) {
        var listItem = document.createElement("li");
        list.appendChild(listItem);

        listItem.appendChild(document.createTextNode(document.getElementById("c2").value));

        hamburger.push(document.getElementById("c2").value);
    }

    return hamburger;
}
