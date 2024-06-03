// delivery report button
document
  .getElementById("delivery_report_btn")
  .addEventListener("click", function () {


    // display table report 
    const tableSection = document.getElementById('tableId');
    tableSection.style.display  = "block";

    const deliveryByBag = document.getElementById("delivery_by_bag");
    const deliveryByMton = document.getElementById("delivery_by_mton");
    // get value input field
    const deliveryByBagQty = parseFloat(deliveryByBag.value);
    const deliveryByMtonQty = parseFloat(deliveryByMton.value);
    //   sum value
    const totalDeliveryByBagMton = deliveryByBagQty + deliveryByMtonQty;
    //   set value total_delivery_bag_mton
    document.getElementById("total_delivery_bag_mton").innerText =
      totalDeliveryByBagMton;

    //   set value Total Delivery Without M.Ton
    document.getElementById("total_delivery_wout_mton").innerText =
      deliveryByBagQty;
    //   set value total_delivery_Mton_to_bag
    const deliveryMtonToBag = (document.getElementById(
      "total_delivery_Mton_to_bag"
    ).innerText = deliveryByMtonQty * 20);
    //   set value total_delivery_bag
    const total_Delivery_Bag_Without_Return = (document.getElementById(
      "total_delivery_bag"
    ).innerText = deliveryByBagQty + deliveryMtonToBag);

    //   set value Total Delivery Bag without Factory Return
    const factoryReturnBag = document.getElementById("factory_return_bag");
    const factoryReturnMton = document.getElementById("factory_return_mton");
    const factoryReturnBagQty = parseFloat(factoryReturnBag.value);
    const factoryReturnMtonQty = parseFloat(factoryReturnMton.value);
    const deliveryQtyWithOutFactoryReturn =
      total_Delivery_Bag_Without_Return -
      factoryReturnBagQty -
      factoryReturnMtonQty * 20;
    if (factoryReturnBagQty > 0 || factoryReturnMtonQty > 0) {
      document.getElementById("total_delivery_bag_fr").innerText =
        deliveryQtyWithOutFactoryReturn;
    } else {
      document.getElementById("total_delivery_bag_fr").innerText = 0;
    }

    //   set value Total Delivery Bag without gabtoli Return
    const gabtoliReturnBag = document.getElementById("gabtoli_return_bag");
    const gabtoliReturnMton = document.getElementById("gabtoli_return_mton");
    const gabtoliReturnBagQty = parseFloat(gabtoliReturnBag.value);
    const gabtoliReturnMtonQty = parseFloat(gabtoliReturnMton.value);
    const deliveryQtyWithOutGabtoliReturn =
      deliveryQtyWithOutFactoryReturn -
      gabtoliReturnBagQty -
      gabtoliReturnMtonQty * 20;
    if (gabtoliReturnBagQty > 0 || gabtoliReturnMtonQty > 0) {
      document.getElementById("total_delivery_bag_gabtolir").innerText =
        deliveryQtyWithOutGabtoliReturn;
    } else {
      document.getElementById("total_delivery_bag_gabtolir").innerText = 0;
    }

    //   set value Total Delivery Bag without  C&B Return
    const cbReturnBag = document.getElementById("cb_return_bag");
    const cbReturnMton = document.getElementById("cb_return_mton");
    const cbReturnBagQty = parseFloat(cbReturnBag.value);
    const cbReturnMtonQty = parseFloat(cbReturnMton.value);
    const deliveryQtyWithOutCbReturn =
      deliveryQtyWithOutGabtoliReturn - cbReturnBagQty - cbReturnMtonQty * 20;
    if (cbReturnBagQty > 0 || cbReturnMtonQty > 0) {
      document.getElementById("total_delivery_bag_cbr").innerText =
        deliveryQtyWithOutCbReturn;
    } else {
      document.getElementById("total_delivery_bag_cbr").innerText = 0;
    }

    //   set value Total Delivery Bag without  nagarbari Return
    const nagarbariReturnBag = document.getElementById("nagarbari_return_bag");
    const nagarbariReturnMton = document.getElementById(
      "nagarbari_return_mton"
    );
    const nagarbariReturnBagQty = parseFloat(nagarbariReturnBag.value);
    const nagarbariReturnMtonQty = parseFloat(nagarbariReturnMton.value);
    const deliveryQtyWithOutNagarbariReturn =
      deliveryQtyWithOutCbReturn -
      nagarbariReturnBagQty -
      nagarbariReturnMtonQty * 20;
    if (nagarbariReturnBagQty > 0 || nagarbariReturnMtonQty > 0) {
      document.getElementById("total_delivery_bag_nagarbarir").innerText =
        deliveryQtyWithOutNagarbariReturn;
    } else {
      document.getElementById("total_delivery_bag_nagarbarir").innerText = 0;
    }

    //   set value Total Delivery Bag without  noapara Return
    const noaparaReturnBag = document.getElementById("noapara_return_bag");
    const noaparaReturnMton = document.getElementById("noapara_return_mton");
    const noaparaReturnBagQty = parseFloat(noaparaReturnBag.value);
    const noaparaReturnMtonQty = parseFloat(noaparaReturnMton.value);
    const deliveryQtyWithOutnoaparaReturn =
      deliveryQtyWithOutNagarbariReturn -
      noaparaReturnBagQty -
      noaparaReturnMtonQty * 20;
    if (noaparaReturnBagQty > 0 || noaparaReturnMtonQty > 0) {
      document.getElementById("total_delivery_bag_noaparar").innerText =
        deliveryQtyWithOutnoaparaReturn;
    } else {
      document.getElementById("total_delivery_bag_noaparar").innerText = 0;
    }
  });
