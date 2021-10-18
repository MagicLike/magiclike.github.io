!function (c) {
    var t = document.createElement("script");
    t.type = "text/javascript",
    t.async = !0,
    t.onload = c,
    t.src = "//lab.subinsb.com/projects/francium/cryptodonate/widget.js";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e)
}(function () {
    Fr.loadCD("btcdb", {
        coin: "bitcoin",
        address: "bc1qk7xvey59l9h0umz9vufs89hwwrz9t9zwhqyqaj",
        buttonClass: "large dark",
        dialogClass: "large dark",
        strings: {
            button: 'Donate',
            buttonTitle: 'Donate {coinName}',
            coins: {
                bitcoin: 'Bitcoin',
                ethereum: 'Ether',
                litecoin: 'Litecoin',
                monero: 'Monero'
            },
            dialogHeader: 'Donate {coinName}',
            dialogHelper: 'Here is my Bitcoin address. <br/> Thank you for your support!',
            openInWallet: 'Click here to send this address to your wallet.'
        }
    });
});
