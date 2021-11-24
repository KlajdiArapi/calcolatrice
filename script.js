let ris = document.getElementById("text-box");

function del(){
  ris.value = ris.value.slice(0, -1);
};

function display(num){
  ris.value+=num;
};

function cls(){
  ris.value = "";
};

function calcola(){
  try {
    ris.value = eval(ris.value);
  } catch (error) {
    console.log="Errore di inserimento";
  }

};
