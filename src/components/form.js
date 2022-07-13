import React, { useRef } from 'react';


export default function Form(){
   
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

    return(
         <div className="formContent">
        <form >
           <div className="userData"> 
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name"   ref={refName} />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" ref={refEmail} />

          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age"  ref={refAge}  />
          </div> 
           
          <div className="favoriteManga">
          <p>What genre of manga do you like most?</p> 
          <select name="genre" id="genre" ref={refGenre}>
            <option value="">---</option>
            <option value="shonen">Shonen</option>
            <option value="shoujo">Shoujo</option>
            <option value="ecchi">Ecchi</option>
            <option value="isekai">Isekai</option>
            <option value="harem">Harem</option>
            <option value="seinen">Seinen</option>
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

          <input type="submit" value="Submit"  /> 

          </div> 
        </form>


       </div>   
    )
}

