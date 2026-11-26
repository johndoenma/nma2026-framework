class siteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    
      <!-- COMPONENT CSS GOES HERE -->
    
      
      <!-- COMPONENT MARKUP GOES HERE -->
      <footer class="site-footer onscroll-wipe animate-on-scroll">
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <div class="footer-about">
                        <h2><a href="index.html">NMA 2026 Framework</a></h2>
                        <p>Footer description text goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facere
                            fuga
                            optio quam! Quibusdam quidem, facere, sequi corporis optio pariatur
                            tempore
                            molestias quia animi veniam nemo repellendus, rerum commodi?</p>
                    </div>
                </div>
                <div class="col-3">
                    <h2>Pages</h2>
                    <nav class="footer-nav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="styleguide.html">Style Guide</a></li>
                        </ul>
                    </nav>
                </div>
            </div>


        </div>
    </footer>
      
    `;

        // COMPONENT JAVASCRIPT GOES HERE  


    };
};
customElements.define("site-footer", siteFooter);