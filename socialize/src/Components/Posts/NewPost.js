import React from 'react';

const NewPost = () => {
    return (
        <div className="New-posts">
          <form>
          <div class="row">
            <div class="input-field col s8">
               <input id="Title" type="Text" class="validate"/>
               <label htmlFor="Title">Title</label>
            </div>
         </div>
         <div class="row">
         <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
         </div>
      </div>

        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.onsubmit}>Post
         
        </button>
        
            
            
      </form>

            
        </div>
    );
}

export default NewPost;
