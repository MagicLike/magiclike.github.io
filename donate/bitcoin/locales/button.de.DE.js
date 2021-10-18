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
            button: 'Spenden',
            buttonTitle: 'Spende {coinName}',
            coins: {
                bitcoin: 'Bitcoin',
                ethereum: 'Ether',
                litecoin: 'Litecoin',
                monero: 'Monero',
            },
            dialogHeader: 'Spende {coinName}',
            dialogHelper: 'Hier ist meine Bitcoin Adresse. <br/> Danke für deine Unterstützung!',
            openInWallet: 'Klicke hier um diese Adresse an deine Wallet zu senden.'
        },
    });
});
