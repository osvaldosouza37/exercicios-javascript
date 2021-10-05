document.querySelector('#botao').onclick = ()=>{
    card();
}

function digimon(entrada){
    return fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${entrada}`);
}

async function card(){

  const entrada = document.querySelector('#texto').value;
  const nome = document.querySelector('#nome');
  const level = document.querySelector('#level');
  let imagem = document.querySelector('img');

  try{
    
  const digi = await digimon(entrada);
  const data = await digi.json();
  nome.innerHTML=data[0].name;
  level.innerHTML=data[0].level;

  imagem.src=data[0].img;

  }catch(err){
      console.log(err)
  };
}
  