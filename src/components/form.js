import React, { useRef } from 'react';


export default function Form(props){
   
    let refName = useRef(),
    refEmail = useRef(),
    refAge = useRef(),
    refGenre = useRef(),
    refDefinitely = useRef(),
    refMaybe = useRef(),
    refNotSure = useRef(),
    refComment = useRef(),
    refNoAds = useRef(),
    refCommentaryLocal = useRef(),
    refForum = useRef(),
    refEasyDownload = useRef(),
    refAccountSystem = useRef();

    const userDataSurvey = {
      name:"",
      email:"",
      age:"",
      genre:"",
      recommend:"",
      features:[],
      comments:""
    }

    document.addEventListener("submit", (e) => {
      if(e.target.matches("#survey")){
        e.preventDefault();
        let isChecked;
        let boxIsChecked;
      
      userDataSurvey.name = refName.current.value; 
      userDataSurvey.email = refEmail.current.value;
      userDataSurvey.age = refAge.current.value;
      userDataSurvey.genre = refGenre.current.value;
      
      if(refDefinitely.current.checked){
         isChecked = "Definitely"; 
      }

      if(refMaybe.current.checked){
        isChecked = "Maybe"
      }

      if(refNotSure.current.checked){
        isChecked = "Not sure"
      }

      userDataSurvey.recommend = isChecked;

      if(refNoAds.current.checked){
        boxIsChecked = "No Ads";
        userDataSurvey.features.push(boxIsChecked);
      }

      if(refCommentaryLocal.current.checked){
        boxIsChecked = "Commentary Local";
        userDataSurvey.features.push(boxIsChecked);
      }


      if(refForum.current.checked){
        boxIsChecked = "Forum";
        userDataSurvey.features.push(boxIsChecked);
      }


      if(refEasyDownload.current.checked){
        boxIsChecked = "Easy Download";
        userDataSurvey.features.push(boxIsChecked);
      }


      if(refAccountSystem.current.checked){
        boxIsChecked = "Account System";
        userDataSurvey.features.push(boxIsChecked);
      }

      userDataSurvey.comments = refComment.current.value;

        props.dataSurvey(userDataSurvey);
        props.visible(false);
      }
    })

    return(
         <div className="formContent">

        <form id="survey" >
           <div className="userData"> 
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name"   ref={refName} required />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" ref={refEmail} required/>

          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age"  ref={refAge} required />
          </div> 
           
          <div className="favoriteManga">
          <p>What genre of manga do you like most?</p> 
          <select name="genre" id="genre" ref={refGenre}>
            <option value="">---</option>
            <option value="Shonen">Shonen</option>
            <option value="Shoujo">Shoujo</option>
            <option value="Ecchi">Ecchi</option>
            <option value="Isekai">Isekai</option>
            <option value="Harem">Harem</option>
            <option value="Seinen">Seinen</option>
          </select>
          </div>

          <div className="recommendAndFeatures">
          <p className="recommend" >Would you recommend World Manga to a friend?</p> 
          <label htmlFor="definitely">Definitely:</label>
          <input type="radio" name="recommend" id="definitely" value="definitely" ref={refDefinitely} defaultChecked/>

          <label htmlFor="maybe">Maybe:</label>
          <input type="radio" name="recommend" id="maybe" value="maybe" ref={refMaybe} />

          <label htmlFor="notSure">Not sure:</label>
          <input type="radio" name="recommend" id="notSure" value="notSure" ref={refNotSure}/>

          <p className="features">Which are your favorites features of World Manga?</p>

          <label htmlFor="noAds">No ads</label>
          <input type="checkbox" name="noAds" id="noAds" value="noAds" ref={refNoAds}/>

          <label htmlFor="commentaryLocal">Commentary Local section</label>
          <input type="checkbox" name="commentaryLocal" id="commentaryLocal" value="commentaryLocal" ref={refCommentaryLocal}/>

          <label htmlFor="forum">Forum</label>
          <input type="checkbox" name="forum" id="forum" value="forum" ref={refForum}/>

          <label htmlFor="easyDownload">Easy and quick download </label>
          <input type="checkbox" name="easyDownload" id="easyDownload" value="easyDownload" ref={refEasyDownload}/>
          
          <label htmlFor="accountSystem">Account's system and interface</label>
          <input type="checkbox" name="accountSystem" id="accountSystem" value="accountSystem" ref={refAccountSystem}/>
          </div>
           
          <div className="commentsAndSubmit">
          <p>Any comments or suggestions?</p>
          <textarea 
          name="comments" 
          id= "comments"
          cols="40" 
          rows="10" 
          placeholder="Enter your comment here"
          ref={refComment}
          ></textarea>

          <input type="submit" value="Submit" className="btnSubmit" /> 

          </div> 
        </form>


       </div>   
    )
}

