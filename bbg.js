(function() {
    'use strict';
    
    // Configuration - Use ARRAY of objects to support multiple URLs per keyword
    const linkConfig = [
        { keyword: 'Sunny Leone', url: '/2015/04/paani-wala-dance-sunny-leone.html' },
        { keyword: 'Sunny Leone', url: '/2015/03/khuda-bhi-leela-sunny.html' },
        { keyword: 'Sunny Leone', url: '/2015/02/desi-look-sunny-leone-ek-paheli-leela.html' },
        { keyword: 'Sunny Leone', url: '/2014/02/baby-doll-ragini-mms2-sunny-leone.html' },
        { keyword: 'Yo Yo Honey Singh', url: '/2015/03/honey-singh-one-bottle-down.html' },
        { keyword: 'Yo Yo Honey Singh', url: '/2024/11/millionaire-yo-yo-honey-singh.html' },
        { keyword: 'Yo Yo Honey Singh', url: '/2017/12/dil-chori-sada-ho-honey-singh.html' },
        { keyword: 'Dil Ka', url: '/2015/03/dil-ka-kya-rung-karun-ost.html' },
        { keyword: 'Zindagi', url: '/2015/03/aye-zindagi-ost-qb-drama.html' },
        { keyword: 'Barbad', url: '/2015/03/dil-e-barbad-ost-song.html' },
        { keyword: 'Tum Se Mil', url: '/2015/03/tum-se-mil-kay-ost-song.html' },
        { keyword: 'Arijit Singh', url: '/2015/03/janib-arijit-singh-songs.html' },
        { keyword: 'Atif Aslam', url: '/2015/03/jeena-tere-bina-badlapur-atif.html' },
        { keyword: 'Miss Pooja', url: '/2015/03/tipsy-hogai-miss-pooja.html' },
        { keyword: 'Maninder Buttar', url: '/2015/03/kite-kalli-maninder-buttar-song.html' },
        { keyword: 'Kamal Khaira', url: '/2015/03/selfian-kamal-khaira-preet.html' },
        { keyword: 'Badshah', url: '/2015/03/2-many-girls-badshah.html' },
        { keyword: 'Bohemia', url: '/2015/03/koi-ni-parwah-haji-bohemia.html' },
        { keyword: 'Kulwinder Billa', url: '/2015/03/chakkwe-suit-kulwinder-billa.html' },
        { keyword: 'Ranjit Bawa', url: '/2015/03/yaari-chandigarh-ranjit-bawa.html' },
        { keyword: 'Ammy Virk', url: '/2015/01/taara-ammy-virk-music-video.html' },
        { keyword: 'Hardy Sandhu', url: '/2014/10/joker-hardy-sandhu-circus.html' },
        { keyword: 'Jazzy B', url: '/2014/10/mitran-de-boot-jazzy-b-kaurb.html' },
        { keyword: 'Jassi Gill', url: '/2014/10/bapu-zimidar-jassi-gill-song.html' },
        { keyword: 'Honey Singh', url: '/2014/10/alcoholic-hoon-honey-singh-akshay.html' },
        { keyword: 'Diljit Dosanjh', url: '/2014/09/this-singh-is-so-stylish-diljit.html' },
        { keyword: 'Prabh Gill', url: '/2014/09/pyaar-tere-da-prabh-gill.html' },
        { keyword: 'Bilal Saeed', url: '/2014/09/lethal-combination-bilal-saeed.html' },
        { keyword: 'Raftaar', url: '/2014/08/happy-single-song-raftaar-big-dhillon.html' },
        { keyword: 'Mehtab Virk', url: '/2014/08/haar-jaani-aa-mehtab-virk-song.html' },
        { keyword: 'Aarsh Benipal', url: '/2014/08/rang-sanwla-aarsh-benipal-song.html' },
        { keyword: 'Falak Shabir', url: '/2014/08/teri-kasam-falak-shabir-song.html' },
        { keyword: 'Farhan Saeed', url: '/2014/08/naam-e-wafa-creature-3d-farhan-saeed.html' },
        { keyword: 'Gippy Grewal', url: '/2014/08/26-ban-gayi-gippy-grewal-jazzyb.html' },
        { keyword: 'Shrey Singhal', url: '/2014/07/shrey-singhal-koi-fariyaad-song.html' },
        { keyword: 'Hamza Malik', url: '/2014/07/sajnaa-hamza-malik-song-2014.html' },
        { keyword: 'Mustafa Zahid', url: '/2014/05/zaroorat-mustafa-zahid-ek-villain.html' },
        { keyword: 'Soch Band', url: '/2014/05/awari-soch-band-ek-villain.html' },
        { keyword: 'Jassi Gill', url: '/2014/05/suraj-song-jassi-gill-roshan-prince.html' },
        { keyword: 'Bilal Saeed', url: '/2014/05/bewafa-bilal-saeed-mp3-irfan-nazar.html' },
        { keyword: 'Diljit Dosanjh', url: '/2014/04/sweetu-diljit-disco-singh-song.html' },
        { keyword: 'Mohit Chauhan', url: '/2014/04/rabba-heropanti-song-mohit-chauhan.html' },
        { keyword: 'Arjun', url: '/2014/04/kabhi-jo-badal-arjun-mp3.html' },
        { keyword: 'Ranjit Bawa', url: '/2014/04/sadi-vaari-aun-de-ranjit-bawa.html' },
        { keyword: 'Babbu Maan', url: '/2014/04/21st-century-saadh-babbu-maan.html' },
        { keyword: 'Ammy Virk', url: '/2014/03/bullet-chammak-challo-ammy-virk.html' },
        { keyword: 'Kulbir Jhinjer', url: '/2014/03/rakhwan-kota-song-kulbir-jhinjer-mp3.html' },
        { keyword: 'Yuvraaj Hans', url: '/2014/03/tere-layi-yuvraaj-hans-mr-mrs-420.html' },
        { keyword: 'Falak Shabir', url: '/2014/02/falak-bholi-bhali-pyaari.html' },
        { keyword: 'Ali Zafar', url: '/2014/02/nahi-maloom-ali-total-siyapaa.html' },
        { keyword: 'Shael', url: '/2014/02/jaan-ve-shael-song-mp3.html' },
        { keyword: 'Shakira', url: '/2014/02/shakira-cant-remember-forget-you.html' },
        { keyword: 'Farhan Akhtar', url: '/2014/02/ahista-ahista-song-farhan-akhtar.html' },
        { keyword: 'Babbal Rai', url: '/2014/02/akh-teri-babbal-rai-mp3download.html' },
        { keyword: 'Maninder Buttar', url: '/2014/02/yaari-maninder-buttar-mp3.html' },
        { keyword: 'Gajendra Verma', url: '/2014/02/saajna-re-song-gajendra-verma.html' },
        { keyword: 'Amrinder Gill', url: '/2014/01/mera-deewanapan-amrinder-gill.html' },
        { keyword: 'Jazzy B', url: '/2014/01/harry-not-brahmachari-jazzy-b.html' },
        { keyword: 'KK', url: '/2014/01/soniye-heartless-songs-kk.html' },
        { keyword: 'Raftaar', url: '/2014/01/gucci-armani-raftaar-song.html' },
        { keyword: 'Bilal Saeed', url: '/2014/01/choothi-bilal-saeed-waqar-mp3.html' },
        { keyword: 'Farhan Saeed', url: '/2013/12/halka-halka-suroor-farhan-saeed.html' },
        { keyword: 'Falak Shabir', url: '/2013/12/judah-falak-shabir-mp3-download.html' },
        { keyword: 'Hussnain Lahori', url: '/2013/12/harjaee-hussnain-lahori-song.html' },
        { keyword: 'Anuv Jain', url: '/2024/11/mere-husn-ke-ilawa-husn-anuv-jain.html' },
        { keyword: 'Kaifi Khalil', url: '/2023/10/kaifi-khalil-kahani-suno-lyrics.html' },
        { keyword: 'Tony Kakkar', url: '/2021/06/dil-tera-jadoo-tutega-ta-pata-laguga.html' },
        { keyword: 'Harnoor', url: '/2021/06/pehli-chan-vekhya-harnoor.html' },
        { keyword: 'Sharry Maan', url: '/2021/06/dilwale-lyrics-sharry-maan.html' },
        { keyword: 'Sidhu Moose Wala', url: '/2021/06/me-my-girlfriend-sidhu.html' },
        { keyword: 'Raja Kumari', url: '/2021/06/us-lyrics-sidhu-raja-kumarii.html' },
        { keyword: 'Kaka', url: '/2021/05/kale-rang-libaas-kaka.html' },
        { keyword: 'Gajendra Verma', url: '/2019/01/khelegi-kya-gajendra-verma.html' },
        { keyword: 'Nimrat Khaira', url: '/2017/12/designer-nimrat-khaira-new-song.html' },
        { keyword: 'Prabh Gill', url: '/2017/12/tareyan-de-des-prabh-gill.html' },
        { keyword: 'Ed Sheeran', url: '/2017/01/ed-sheeran-castle-on-hill.html' },
        { keyword: 'Amrinder Gill', url: '/2017/01/ni-mainu-amrinder-gill-sarvann.html' },
        { keyword: 'Guru Randhawa', url: '/2016/06/suit-guru-randhawa-arjun.html' },
        { keyword: 'Amrit Maan', url: '/2016/05/camaro-kaali-amrit-maan.html' },
        { keyword: 'Zack Knight', url: '/2016/05/enemy-lyrics-zack-knights-new-song-2016.html' },
        { keyword: 'Ankit Tiwari', url: '/2016/02/sanam-teri-kasam-lyrics-ankit-tiwari.html' },
        { keyword: 'Nooran Sisters', url: '/2015/12/jindriye-nooran-sisters.html' },
        { keyword: 'Kanika Kapoor', url: '/2015/09/teddy-bear-kanika-ikka.html' },
        { keyword: 'Bilal Khan', url: '/2014/10/lagne-laga-bilal-khan.html' },
        { keyword: 'Omar Nadeem', url: '/2014/10/girti-deewar-omar-nadeem-song.html' },
        { keyword: 'Babbu Maan', url: '/2014/10/babbu-maan-khat-mera-gham-2.html' },
        { keyword: 'Ali Zafar', url: '/2014/09/kill-dil-title-song-ali-zafar.html' },
        { keyword: 'Farhan Saeed', url: '/2014/07/farhan-saeed-roiyaan-song-royi-aan.html' },
        { keyword: 'Badshah', url: '/2014/06/chull-badshah-rap-fazilpuria-song.html' },
        { keyword: 'Bohemia', url: '/2014/05/bohemia-swag-mp3-download-song.html' },
        { keyword: 'Hardy Sandhu', url: '/2019/01/tu-na-jaane-hardy-sandhu.html' },
        { keyword: 'Gippy Grewal', url: '/2017/12/nai-shad-da-gippy-grewal.html' },
        { keyword: 'Atif Aslam', url: '/2017/01/pehli-dafa-atif-aslam.html' },
        { keyword: 'Ikka', url: '/2014/01/bad-girl-sherlyn-chopra-ikka.html' },
        { keyword: 'Kaur B', url: '/2014/01/feeling-kaur-b-song-mp3.html' },
        { keyword: 'Money Aujla', url: '/2014/01/gori-london-ayi-money-aujla.html' },
        { keyword: 'Amanat Ali', url: '/2014/01/naina-lagay-amanat-ali-mp3.html' },
    ];

    // Settings
    const settings = {
        maxLinksPerKeyword: 2,   // Max times a keyword gets linked across entire page
        caseSensitive: false,
        targetBlank: false,
        addNoFollow: false,
        excludeTags: ['A', 'SCRIPT', 'STYLE', 'CODE', 'PRE', 'TEXTAREA'],
        contentSelector: '.post-body, .entry-content, .post-content'
    };

    // Escape regex special characters
    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function createInternalLinks() {
        const contentArea = document.querySelector(settings.contentSelector);
        if (!contentArea) return;

        // Build a map: keyword (lowercased if case-insensitive) -> { url, count }
        // We only keep the FIRST url per unique keyword (duplicates already handled by array order)
        const keywordMap = new Map();
        linkConfig.forEach(({ keyword, url }) => {
            const key = settings.caseSensitive ? keyword : keyword.toLowerCase();
            if (!keywordMap.has(key)) {
                keywordMap.set(key, { originalKeyword: keyword, url: url, count: 0 });
            }
        });

        // Collect all text nodes first, then process (avoids live DOM mutation issues)
        const textNodes = [];
        function collectTextNodes(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                // Skip if inside excluded tag or already inside a link
                let parent = node.parentNode;
                while (parent && parent !== contentArea) {
                    if (settings.excludeTags.includes(parent.tagName) || parent.tagName === 'A') {
                        return;
                    }
                    parent = parent.parentNode;
                }
                if (node.textContent.trim()) {
                    textNodes.push(node);
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                Array.from(node.childNodes).forEach(collectTextNodes);
            }
        }
        collectTextNodes(contentArea);

        // Process each text node
        textNodes.forEach(textNode => {
            let text = textNode.textContent;
            let modified = false;
            let resultHTML = text;

            keywordMap.forEach((data, key) => {
                if (data.count >= settings.maxLinksPerKeyword) return;

                const flags = settings.caseSensitive ? 'g' : 'gi';
                const regex = new RegExp('\\b' + escapeRegex(data.originalKeyword) + '\\b', flags);

                resultHTML = resultHTML.replace(regex, function(match) {
                    if (data.count < settings.maxLinksPerKeyword) {
                        data.count++;
                        modified = true;

                        let attrs = `href="${data.url}"`;
                        if (settings.targetBlank) attrs += ' target="_blank" rel="noopener"';
                        if (settings.addNoFollow) attrs += ' rel="nofollow"';

                        return `<a ${attrs} class="auto-internal-link">${match}</a>`;
                    }
                    return match;
                });
            });

            // Only update DOM if something changed
            if (modified) {
                const parent = textNode.parentNode;
                if (!parent) return;

                // ✅ KEY FIX: Use a temporary element + insertAdjacentHTML
                // This correctly parses the HTML string into real DOM nodes
                const temp = document.createElement('span');
                temp.innerHTML = resultHTML;

                // Insert all parsed child nodes before the original text node
                while (temp.firstChild) {
                    parent.insertBefore(temp.firstChild, textNode);
                }
                // Remove the original plain text node
                parent.removeChild(textNode);
            }
        });
    }

    // Run when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createInternalLinks);
        } else {
            createInternalLinks();
        }
    }

    init();

    // Styles for auto-generated links
    const style = document.createElement('style');
    style.textContent = `
        .auto-internal-link {
            color: #0066cc;
            text-decoration: underline;
            transition: color 0.3s ease;
        }
        .auto-internal-link:hover {
            color: #004499;
        }
    `;
    document.head.appendChild(style);

})();
