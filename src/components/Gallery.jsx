import "../style/Gallery.css"

function Gallery(){
    return(
        <section class="gg">
            <h2>Gallery</h2>
            <ul>
                <li><img width={200} src="/assets/TN.jpg" alt="TonNam"></img></li>
                <li><img width={200} src="/assets/TN.jpg" alt="TonNam"></img></li>
                <li><img width={200} src="/assets/TN.jpg" alt="TonNam"></img></li>
            </ul>
        </section>
    );
}

export default Gallery;