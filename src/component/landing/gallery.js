import Title from "./Title";
import '../../scss/gallery.css'

export default function gallery() {
  return (
    <>
      <div className="main_gallery l-container">
        <Title titel = "Gallery & Photos" subtitle= "#Paradise"/>
        <div class=" gallery">
                    <img src="./compimage/landing/a.png" alt="" class="post__gallery-image" />
                    <img src="./compimage/landing/a.png" alt="" class="post__gallery-image" />
                    <img src="./compimage/landing/a.png" alt="" class="post__gallery-image" />
                    <img src="./compimage/landing/a.png" alt="" class="post__gallery-image" />
                    <img src="./compimage/landing/a.png" alt="" class="post__gallery-image" />
                    <img src="./compimage/landing/a.png" alt="" class="post__gallery-image" />
                    <img src="./compimage/landing/a.png" alt="" class="post__gallery-image" />
                    <img src="./compimage/landing/a.png" alt="" class="post__gallery-image" />
                </div>
      </div>
    </>
  );
}
