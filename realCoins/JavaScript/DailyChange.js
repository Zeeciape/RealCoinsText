let NewDate=24;
let DailyPin='222222'





if( `${new Date().getDate()}`===`${NewDate}` && localStorage.getItem("confirmDate") != NewDate){
    localStorage.setItem("yutube1","newDate")
    localStorage.setItem("yutube2","newDate")
    localStorage.setItem("dailyTasks","newDate")
    localStorage.setItem("telegram1","newDate")
    localStorage.setItem("telegram2","newDate")
    localStorage.setItem("twiter","newDate")
    localStorage.setItem("instagram","newDate")
    localStorage.setItem("tiktok","newDate")


    localStorage.setItem("dailyTask","newDate")

    localStorage.setItem("confirmDate",NewDate)


    document.querySelector('.yutube1clickSign').style.display='flex';
    document.querySelector('.yutube1clickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.yutube2clickSign').style.display='flex';
    document.querySelector('.yutube2clickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.dailyRewardclickSign').style.display='flex';
    document.querySelector('.dailyRewardclickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.telegramChannelClickSign').style.display='flex';
    document.querySelector('.telegramChannelClickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.telegramGroupClickSign').style.display='flex';
    document.querySelector('.telegramGroupClickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.XClickSign').style.display='flex';
    document.querySelector('.XClickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.instagramClickSign').style.display='flex';
    document.querySelector('.instagramClickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.tiktokClickSign').style.display='flex';
    document.querySelector('.tiktokClickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
}



//JoinOurLinkContainer
const JoinOurLinkContainer=document.querySelectorAll('.JoinOurLinkContainer');
JoinOurLinkContainer.forEach((e)=>{
    e.addEventListener('click',()=>{

        let dataDashed_Id=e.dataset.id;
        let getItem=Number(localStorage.getItem('displayCoins'));

        if(dataDashed_Id==="yutube1" && localStorage.getItem("yutube1") === "newDate"){
            localStorage.setItem("yutube1","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+100000);
        }else if(dataDashed_Id==="yutube2" && localStorage.getItem("yutube2") === "newDate"){
            localStorage.setItem("yutube2","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+100000);
        }else if(dataDashed_Id==="dailyTasks" && localStorage.getItem("dailyTasks") === "newDate"){
            localStorage.setItem("dailyTasks","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+500);
        }else if(dataDashed_Id==="telegram1" && localStorage.getItem("telegram1") === "newDate"){
            localStorage.setItem("telegram1","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
        }else if(dataDashed_Id==="telegram2" && localStorage.getItem("telegram2") === "newDate"){
            localStorage.setItem("telegram2","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
        }else if(dataDashed_Id==="twiter" && localStorage.getItem("twiter") === "newDate"){
            localStorage.setItem("twiter","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
        }else if(dataDashed_Id==="instagram" && localStorage.getItem("instagram") === "newDate"){
            localStorage.setItem("instagram","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
        }else if(dataDashed_Id==="tiktok" && localStorage.getItem("tiktok") === "newDate"){
            localStorage.setItem("tiktok","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
        }
    })
})





setInterval(() => {
    
    if(localStorage.getItem("yutube1")==="AlreadyClick"){
        document.querySelector('.yutube1clickSign').style.display='none';
        document.querySelector('.yutube1clickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("yutube2")==="AlreadyClick"){
        document.querySelector('.yutube2clickSign').style.display='none';
        document.querySelector('.yutube2clickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("dailyTasks")==="AlreadyClick"){
        document.querySelector('.dailyRewardclickSign').style.display='none';
        document.querySelector('.dailyRewardclickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("telegram1")==="AlreadyClick"){
        document.querySelector('.telegramChannelClickSign').style.display='none';
        document.querySelector('.telegramChannelClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("telegram2")==="AlreadyClick"){
        document.querySelector('.telegramGroupClickSign').style.display='none';
        document.querySelector('.telegramGroupClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("twiter")==="AlreadyClick"){
        document.querySelector('.XClickSign').style.display='none';
        document.querySelector('.XClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("instagram")==="AlreadyClick"){
        document.querySelector('.instagramClickSign').style.display='none';
        document.querySelector('.instagramClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("tiktok")==="AlreadyClick"){
        document.querySelector('.tiktokClickSign').style.display='none';
        document.querySelector('.tiktokClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }

    //////////
    if(localStorage.getItem("dailyTask") === "AlreadyClick"){
        
        document.querySelector('.dailyTaskFinishMissionButton').style.opacity=1;
        document.querySelector('.dailyTaskFinishMissionButton_p').style.display='block';
        document.querySelector('.dailyTaskinput').style.display='none';

    }else if(localStorage.getItem("dailyTask") === "confirmClick"){

        document.querySelector('.dailyTaskFinishMissionButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton_p').style.display='none';
        document.querySelector('.dailyTaskinput').style.display='none';
    }


},100);



let dailyTaskinput=document.querySelector('.dailyTaskinput');

document.querySelector('.dailyTasksubmitButton').addEventListener('click',()=>{
    
    
    if(DailyPin===dailyTaskinput.value && localStorage.getItem("dailyTask") === "newDate"){
        
        document.querySelector('.dailyTaskinput').style.boxShadow='0px 0px 4px green';
        setTimeout(()=>{
            localStorage.setItem('dailyTask','AlreadyClick')
        },1000)
        
        
    }else{

        
        document.querySelector('.displayMessage').style.display='block';
        document.querySelector('.displayMessage').innerText='invalid answer';
        document.querySelector('.dailyTaskinput').style.boxShadow='0px 0px 4px red';
        setTimeout(()=>{
            document.querySelector('.displayMessage').style.display='none';
        },1000)

    }
})




document.querySelector('.dailyTaskFinishMissionButton_p').addEventListener('click',()=>{

    if(localStorage.getItem("dailyTask") === "AlreadyClick"){
        localStorage.setItem('dailyTask','confirmClick')

        localStorage.setItem('displayCoins',Number(localStorage.getItem('displayCoins'))+400000)


        localStorage.setItem('coinsContainerBottomI',0)
        localStorage.setItem('coinsContainerBottomII',0)
                
        coinsContainer_coinsI.style.opacity=1;
        coinsContainer_coinsIII.style.opacity=1;
        coinsContainer_coinsV.style.opacity=1;
        coinsContainer_coinsVII.style.opacity=1;
        coinsContainer_coinsIX.style.opacity=1;
        coinsContainer_coinsII.style.opacity=1;
        coinsContainer_coinsIV.style.opacity=1;
        coinsContainer_coinsVI.style.opacity=1;
        coinsContainer_coinsVIII.style.opacity=1;
        coinsContainer_coinsX.style.opacity=1;
    }

})
