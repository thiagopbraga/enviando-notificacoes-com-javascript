const $button = document.querySelector("button");

$button.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      const notification = new Notification("Hello World!", {
        body: "This is a notification", // corpo da notificação
        //data: { hello: "world" }, // pode passar dados pela notificação
        //icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', // pode colocar um icone na notificação
        //tag: "hello-world",
      });
      notification.addEventListener("close", (event) => {
        console.log("Notification closed");
      });
    }
  });
});


/* another example */

let notification
document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === 'hidden') {
        notification = new Notification('Onde você está indo? Você está me deixando?', {
            body: 'Volte para cá, por favor!',
            tag: 'volte',
        })
    } else {
        notification.close()
    }
})