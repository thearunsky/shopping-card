function increaseNumber(text_area, item_price) {

    // Getting Number of products
    const value = parseInt(document.getElementById(text_area).value)

    // Can not greater than 5 products at one time
    if (value >= 5) {

        // Pop up message and number still be 5
        alert("You can not order more than 5 items at one time")
        document.getElementById(text_area).value = 5
    } else {

        // Increase number of products putting value in it
        let items = value + 1
        document.getElementById(text_area).value = items

        // Calculating toatl price of products and changing value in it
        let item_total_price = items * 50
        document.getElementById(item_price).innerHTML = item_total_price

        // Changing on summary board
        document.getElementById("p_amount").innerHTML = parseInt(document.getElementById("first_item_price").innerHTML) + parseInt(document.getElementById("second_item_price").innerHTML)
        update();

    }
}

function decreaseNumber(text_area, item_price) {
    const value = parseInt(document.getElementById(text_area).value)

    if (value === 0) {
        document.getElementById(text_area).value = 1
    } else {
        let items = value - 1
        document.getElementById(text_area).value = items

        let = item_total_price = items * 50
        document.getElementById(item_price).innerHTML = item_total_price

        document.getElementById("p_amount").innerHTML = parseInt(document.getElementById("first_item_price").innerHTML) + parseInt(document.getElementById("second_item_price").innerHTML)
        update();
    }
}

function update() {
    document.getElementById("p_amount").innerHTML = parseInt(document.getElementById("first_item_price").innerHTML) + parseInt(document.getElementById("second_item_price").innerHTML)

    let Product_Amount = parseInt(document.getElementById("p_amount").innerHTML);
    let Shipping_Amount = parseInt(document.getElementById("s_amount").innerHTML);
    let Delivery_Amount = parseInt(document.getElementById("d_amount").innerHTML);
    let Discount_Amount = parseInt(document.getElementById("discount_amount").innerHTML);

    if (Discount_Amount.toString() === "NaN") {
        document.getElementById("total").innerHTML = Product_Amount + Shipping_Amount + Delivery_Amount
    } else {
        document.getElementById("total").innerHTML = Product_Amount + Shipping_Amount + Delivery_Amount + Discount_Amount
    }
}

function discount_btn() {
    const coupon_code = document.getElementById("dicount_code").value

    if (coupon_code === "ARUN100") {
        document.getElementById("discount_text").innerHTML = "50% Coupon Applied";

        let off = (document.getElementById("p_amount").innerHTML) / 2

        document.getElementById("discount_amount").innerHTML = -off;
        update()

    } else {
        document.getElementById("error_trw").innerHTML = "Invalid Code";
    }
}
update();


function Delivery() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    const text = `${d.getDate() + 2}/${monthNames[d.getMonth()]}/${d.getFullYear()}`
    document.getElementById("delivery-date").innerHTML = text

}

Delivery()