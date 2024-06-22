function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const state = e.target.checked;
  if(state){
    document.getElementById('text').style.backgroundColor = "red";
  }else{
    document.getElementById('text').style.backgroundColor = "transparent";
  }
}
