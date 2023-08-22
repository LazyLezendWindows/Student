var sName=""; var nRol=0; var gender='';var grade=''; var lctn=""; var Hindi=""; var English=0; var Telugu=""; var Science="";
var Maths=""; var SocialStudies=""; var link=''; var emNo=0;
function btnSubmission1()
{
    sName=document.getElementsByClassName("txtNam").value;
    if(sName === 0)
    {
        document.getElementsByClassName("txtNam").focus();
        return;
    }
    if(sName>25)
    {
        alert("error");
    }

    var DOB=document.getElementById("Dobid").value;
    if(DOB ===0)
    {
        document.getElementsByClassName("Dobid").focus();
        return;
    }
    nRol=document.getElementById("noRoll").value;
    if(nRol === 0)
    {
        document.getElementsByClassName("noRoll").focus();
        return;
    }
    gender=document.querySelector('input [name="rbGender"]:checked');
    grade=document.querySelector('input[name="Standard"]:checked');
    lctn=document.getElementsByClassName("txtAdrs").value;
    Hindi=document.getElementById("txtHn").value;
    English=document.getElementById("txtEn").value;
    Telugu=document.getElementById("txtTe").value;
    Maths=document.getElementById("txtMt").value;
    Science=document.getElementById("txtSc").value;
    SocialStudies=document.getElementById("txtSS").value;
}
btnSubmission2 = () =>
{
link=document.querySelector('input[name="relationrb"]:checked');
emNo=document.getElementById("noCont").value;
sName=document.getElementsByClassName("txtNam").value;
    if(sName === 0)
    {
        document.getElementsByClassName("txtNam").focus();
        return;
    }
    if(sName>25)
    {
        alert("error");
    }
    lctn=document.getElementsByClassName("txtAdrs").value;
}

