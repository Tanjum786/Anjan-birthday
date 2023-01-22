import React from "react";
import { Link } from "react-router-dom";

export default function Frontpage() {
  return (
    <div>
      <div class="front-card">
        <img
          src="https://cdn.pixabay.com/photo/2020/10/06/21/54/cake-5633461__480.png"
          alt="birthday"
          class="birthday"
        />
        <div class="text">
          <h1>Hii Anjana!</h1>
          <p>
            Birthday की बहार आयी हैं, आप के लियें ख़ुशियों की Best Wishes लायी
            हैं, आप Smile करो हर दिन, यही हमारी दुआ है… 
          </p>
          <h1>-Niswey💖</h1>
          <p>जन्मदिन आया है, शुभकामनाओं और खुशियों का खजाना लेकर आया है</p>
            <Link to="/wishespage" className="button">
           Apna Khazana Kholo 
            
            </Link>

        </div>
        <div class="space"></div>
      </div>
    </div>
  );
}
