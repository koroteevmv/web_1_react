import React, {Component} from 'react';
class Video extends Component {
   render() {
       return (
           <div className="row">
                <div className="col">
                    <h2 id="get-involved"><span class="bd-content-title">Видео с котиками</span></h2>
					<br/>
					<p className="text-center">🐈🐈🐈🐈🐈</p>
					<iframe src='https://www.youtube.com/embed/J7UwSVsiwzI'
						frameBorder='0'
						allow='autoplay; encrypted-media'
						allowFullScreen
						title='video'
						width='750'
						height='400'
					/>
                </div>
            </div>
       );
   }
}
export default Video;
