import React from 'react';
import BlogStyle from './Blog.module.css';


const Blog = () =>{

    const catalogInfo = [
        {
            imgSrc:'http://134976.lp.tobiz.net/img/400x580/2656164dde8d87de7ac805b7a449ecec.jpg',
            title:'What is the difference between iPhone 11 and iPhone XR',
            info:'After the release of the iPhone 11, last year\'s iPhone XR remained on sale at a reduced price. There was a choice: to take a newer device or a more affordable one. We will help in this by comparing these models.'
        },
        {
            imgSrc:'http://134976.lp.tobiz.net/img/400x400/283e904e8c4676c5da0406d59c947856.png',
            title:'How "Optimized charging" works in iOS 13',
            info:'The iPhone battery, like all rechargeable power supplies, is a consumable: its capacity decreases after each charge cycle. In iOS 13, Apple implemented a way to slow down this process so that the battery lasts longer. We tell you how this function works and how to enable it.'
        },
        {
            imgSrc:'http://134976.lp.tobiz.net/img/400x580/1f91178f41bd359ba9d0b65cdde76c42.jpg',
            title:'Overview of the Locator app, which replaced Find iPhone and Find Friends',
            info:'After installing iOS 13, you will not find the "Find iPhone" and "Find Friends" applications on the home screen of your iPhone. Instead, a new application "Locator" has appeared, and we will tell about it in more detail.'
        },
        {
            imgSrc:'http://134976.lp.tobiz.net/img/400x400/61b6077c892bf65d2e4211f6208f3e6c.jpeg',
            title:'Apple Arcade launches on September 19. What to expect from the company\'s game service',
            info:'Apple Arcade is a new Apple branded service. At launch, it opens access to hundreds of new games that are created exclusively for the company\'s devices: iPhone and iPad, Mac and Apple TV. We will talk about it in more detail.'
        },
        {
            imgSrc:'http://134976.lp.tobiz.net/img/470x200/5c5739b3a0b54c3d3ee6fbbd206f9718.png',
            title:'Meet Apple TV +. Coming soon to your screens',
            info:'Apple Arcade is a new Apple branded service. At launch, it opens access to hundreds of new games that are created exclusively for the company\'s devices: iPhone and iPad, Mac and Apple TV. We will talk about it in more detail.'
        },
        {
            imgSrc:'http://134976.lp.tobiz.net/img/400x300/96736d83f80943ba1aa866e53618ce5a.jpg',
            title:'What is interesting is the new iPad with a 10.2-inch screen',
            info: 'The new iPad with a 10.2-inch screen supports interaction with the Apple Pencil and Smart Keyboard. It is convenient to use for work tasks, drawing and study. It can be a replacement for a computer, which is always with you. Let\'s talk about it in more detail.'
        },
        {
            imgSrc:'http://134976.lp.tobiz.net/img/470x200/cef76f2970341b26234f6770f45fb9f5.jpg',
            title:'What is interesting about the Apple Watch Series 5',
            info:'The main innovation of the Apple Watch Series 5 was a display that never falls asleep. You don\'t even have to raise your wrist to see the time or any other additional information with them. About this and not only in this article.'
        },
    ];

    const catalog = catalogInfo.map((item)=>{
        return(
            <div className={BlogStyle.item}>
                <img src={item.imgSrc}/>
                <p>
                    <b>
                        {item.title}
                    </b>
                </p>
                <p>
                    {item.info}
                </p>
            </div>
        )
    })

    return(
        <div className={BlogStyle.container}>
           <div className={BlogStyle.container_two}>
              <div className={BlogStyle.main}>
                  <div className={BlogStyle.title_main}>
                      <h1>Read our blog</h1>
                  </div>
                  <div className={BlogStyle.plain_container}>
                      <div className={BlogStyle.title_in_plain}>
                          <p>We share the experience of using Apple equipment and gadgets first hand</p>
                      </div>
                      <div className={BlogStyle.catalog_container}>
                          <div className={BlogStyle.catalog}>
                              {catalog}
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
    )
}

export default Blog;
