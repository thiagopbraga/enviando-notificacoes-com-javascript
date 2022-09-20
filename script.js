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

/* let notification
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
*/

let notification;
let interval;
document.addEventListener("visibilitychange", () => { 
  if (document.visibilityState === "hidden") { // se a aba estiver oculta
    const leaveDate = new Date(); // data de quando o usuário saiu
    interval = setInterval(() => { // setInterval executa uma função a cada x tempo
      notification = new Notification(
        "Onde você está indo? Você está me deixando?",
        {
          body: `Volte para cá, por favor! Você já se foi a ${Math.round(
            (new Date() - leaveDate) / 1000 // vai mostrar quando tempo se passou em segundos
          )} segundos`,
          tag: "volte",
        }
      );
    }, 100); // vai mostrar a cada 100 milisegundos
  } else {
    if (interval) clearInterval(interval); // vai parar o setInterval
    if (notification) notification.close(); // vai fechar a notificação
  }
});
