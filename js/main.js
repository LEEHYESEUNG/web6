$(function(){

  /**
   * gnb scroll
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */

  $(window).scroll(function(){

    const headerHeight = $('.header .header-group').outerHeight();
    const curr = $(this).scrollTop();

    if( curr > headerHeight){

      $('.gnb').addClass('fixed')
    }else{

      $('.gnb').removeClass('fixed')
    };
  });




  /**
   * gnb all
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */

    $('.gnb .btn-all').click(function(){

    $('.gnb .btn-all').toggleClass('active');
    $('.gnb .gnb-list').toggleClass('active');
    $('.gnb .text').toggleClass('active');
    $('.gnb .all-gnb-area').toggleClass('active');
    });




  /**
   * menu open
   *
   * @version 1.0.0
   * @since 2022-01-16
   * @author 본인이름 (Nico)
   * @pram
  */
  $('.util-area .btn-menu').click(function(e){
    e.preventDefault();

    $('.menu-open').addClass('open');
    $('body').addClass('overflow');
  });

  $('.menu-open .btn-close').click(function(e){
    e.preventDefault();

    $('.menu-open').removeClass('open');
    $('body').removeClass('overflow');
  });

  $('.menu-flex .main-title-area a').click(function(e){
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');

    const main = $(this).data('con');
    $(main).addClass('active').siblings().removeClass('active');
  });

  $('.brand-find-area .search-btn-area a').click(function(e){
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');

    const spell = $(this).data('spell');
    $(spell).addClass('active').siblings().removeClass('active');
  });





  /**
   * sc-visual
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */
  const visualSlide = new Swiper(".visual-slide", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    speed : 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  

  /**
   * live-notice-slide
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */
  const noticeSlide = new Swiper(".live-notice-slide", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });




  /**
   * live
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
   */
  fetch('./data/live.json')
  .then((response) => response.json())
  .then((json) => {
    data = json.items;

    let html = '';
    data.forEach(element => {

      html+= 
      `<li class="live-item">
        <a href="" class="link-item">
          <div class="img-box">
              <img src="${element.thumb}" alt="${element.title}">
              <div class="img-text">
                  <span class="live-date">${element.data}</span>
                  <span class="live-time">${element.time}</span>
              </div>
          </div>
          <div class="text-box">
            <p class="title">${element.title}</p>
            <p class="desc">${element.desc}</p>
            <div class="sub-box">
                <img src="${element.subthumb}" alt="">
                <div class="sub-text-box">
                    <p class="sub-title">${element.subtitle}</p>
                    <div class="price-box">
                        <span class="percent">${element.percent}</span>
                        <em class="price">${element.price}</em>
                    </div>
                </div>
            </div>
            <p class="barnd-name">${element.brand}</p>
            <button class="alarm-box">
                <span class="alarm-icon">
                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" class="liveCalendar_icon__3aU55"><mask id="iconBellPlus_18x15_red_svg__a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="0" width="14" height="15"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.958.5H2v13.75h13.958V13H12.5v-2.5H11V6h4.958V.5z" fill="#C8C8C8"></path></mask><g mask="url(#iconBellPlus_18x15_red_svg__a)"><mask id="iconBellPlus_18x15_red_svg__b" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.875 1.75a4.583 4.583 0 00-4.583 4.583v3.5l-1 1.917h11.166l-1-1.917v-3.5A4.583 4.583 0 008.875 1.75z"></path></mask><path d="M4.292 9.834l.886.463a1 1 0 00.114-.463h-1zm-1 1.916l-.887-.463a1 1 0 00.887 1.463v-1zm1 0v1-1zm9.166 0v1-1zm1 0v1a1 1 0 00.887-1.463l-.886.463zm-1-1.917l.887-.462a1 1 0 00-.886-.538v1zm0 0h-1a1 1 0 001 1v-1zm-8.166-3.5A3.583 3.583 0 018.875 2.75v-2a5.583 5.583 0 00-5.583 5.583h2zm0 3.5v-3.5h-2v3.5h2zm-1.114 2.38l1-1.916-1.773-.926-1 1.916 1.773.926zm.114-1.463h-1v2h1v-2zm9.166 0H4.292v2h9.166v-2zm1 0h-1v2h1v-2zm-1.886-.454l1 1.917 1.773-.925-1-1.917-1.773.925zm.886.537v-2 2zm-1-4.5v3.5h2v-3.5h-2zM8.875 2.75a3.583 3.583 0 013.583 3.583h2c0-3.083-2.5-5.583-5.583-5.583v2z" fill="red" mask="url(#iconBellPlus_18x15_red_svg__b)"></path><path d="M6.64 11.632a2.293 2.293 0 004.47 0" stroke="red" stroke-linejoin="round"></path></g><path d="M14.708 6.333v5.834m2.917-2.917H11.79" stroke="red" stroke-width="1.25"></path></svg>
                </span>
                알람받기
            </button> 
          </div>
        </a>
      </li>`;
    });

    $('#liveList').html(html);
  });


  

  /**
   * trand pick
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */

  fetch('./data/newitem.json')
  .then((response) => response.json())
  .then((json) => {
     data = json.items;
 
     let html = '';

     data.forEach(element => {

        html+= `<li class="pick-item">
                    <a href="" class="link-item">
                        <img src="${element.thumb}" alt="${element.title}">
                        <p class="title">${element.title}</p>
                    </a> 
                </li>`;
     });

     $('#pickList').html(html);  
  });

  $('.sc-pick .link-cate').click(function(e){
    e.preventDefault();

    const pick = $(this).data('pick');

    $(this).addClass('active').siblings().removeClass('active');
    $(pick).parent().addClass('active').siblings().removeClass('active');
  });




  /**
   * fashtion
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */
  fetch('./data/fashion.json')
  .then((response) => response.json())
  .then((json) => {
     data = json.items;

    let html = '';

    data.forEach(element => {

      if ( element.crop.length > 0 ) {
        cropBg = `<span class="crop">${element.crop}</span>`;
      } else {
        cropBg = '';
      }

        html+= `<li class="prd-item">
                    <a href="" class="link-item">
                        <img src="${element.thumb}" alt="${element.title}">
                        <p class="title"><span class="bold">${element.bold}</span>${element.title}</p>
                        <div class="crop-box">${cropBg}</div>
                    </a>
                </li>`;     
     });

     $('#fashionList').html(html);  
  });
    
 

    

  /**
   * rank
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */
  fetch('./data/rank.json')
  .then((response) => response.json())
  .then((json) => {
     data = json.items;

    conItgirl = data.filter((a)=>{ return a.contents == "itgirl"});
    conWomen = data.filter((a)=>{ return a.contents == "women"});
  
    let html1 = '';
    let html2 = '';

    conItgirl.forEach(element => {
      html1+= `<li class="rank-item">
                <a href="" class="link-item">
                  <img src="${element.thumb}" alt="${element.title}">
                    <div class="text-box">
                    <p>${element.title}</p>
                  </div>
                </a>
              </li>`;
    });
    conWomen.forEach(element => {
      html2+= `<li class="rank-item">
                <a href="" class="link-item">
                  <img src="${element.thumb}" alt="${element.title}">
                    <div class="text-box">
                    <p>${element.title}</p>
                  </div>
                </a>
              </li>`;
    });

    $('#itgirlList').html(html1);  
    $('#womenList').html(html2);  
  });


 

  /**
   * rank-look
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */
   fetch('./data/rank-look.json')
   .then((response) => response.json())
   .then((json) => {
      data = json.items;

      itgirl = data.filter((a)=>{ return a.theme == "itgirl"});
      women = data.filter((a)=>{ return a.theme == "women"});
      men = data.filter((a)=>{ return a.theme == "men"});

      let html1 = '';
      let html2 = '';
      let html3 = '';

      lookIndex = 1;
      itgirl.forEach(element => {
        html1+= `<li class="best-item">
                  <a href="" class="link-item">
                      <img src="${element.thumb}" alt="${element.title}">
                      <div class="text-box">
                          <p class="item-title">${element.title}</p>
                          <em class="price"><span>${element.price}</span>원</em>
                      </div>
                      <span class="crop-icon">${lookIndex}</span>
                  </a>
                </li>`;
        lookIndex++;
       });

      lookIndex = 1;
      women.forEach(element => {
         html2+= `<li class="best-item">
                   <a href="" class="link-item">
                       <img src="${element.thumb}" alt="${element.title}">
                       <div class="text-box">
                           <p class="item-title">${element.title}</p>
                           <em class="price"><span>${element.price}</span>원</em>
                       </div>
                       <span class="crop-icon">${lookIndex}</span>
                   </a>
                 </li>`;
         lookIndex++;
        });

      lookIndex = 1;
      men.forEach(element => {
        html3+= `<li class="best-item">
                  <a href="" class="link-item">
                      <img src="${element.thumb}" alt="${element.title}">
                      <div class="text-box">
                          <p class="item-title">${element.title}</p>
                          <em class="price"><span>${element.price}</span>원</em>
                      </div>
                      <span class="crop-icon">${lookIndex}</span>
                  </a>
                </li>`;
        lookIndex++;
        });

       $('#itgirlLook').html(html1);  
       $('#womenLook').html(html2);  
       $('#menLook').html(html3);    
  });




  /**
   * rank-all
   *
   * @version 1.0.0
   * @since 
   * @author
   * @pram
  */
  fetch('./data/rank-buy.json')
  .then((response) => response.json())
  .then((json) => {
    data = json.items;

    let html = '';

    buyIndex = 1;
    data.forEach(element => {
       html+= `<li class="rank-item">
                    <a href="" class="link-item">
                        <img src="${element.thumb}" alt="${element.title}">
                        <div class="text-box">
                            <p class="item-title">${element.title}</p>
                            <em class="price"><span>${element.price}</span>원</em>
                        </div>
                        <span class="crop-icon">${buyIndex}</span>
                    </a>
                </li>`;
    buyIndex++;
    });

    $('#bestBuy1').html(html);  
    $('#bestBuy2').html(html);  
    $('#bestBuy3').html(html);  
  });

  $('.sc-rank .content-group .link-content').click(function(e){
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');

    if($(this).hasClass('women')){
      $(this).parent().parent().siblings('.link-sc').css('background-color', '#a06cd5');
      $(this).parent().parent().siblings('.link-sc').find('.patern').css('background-position', '-140px 0');
      $(this).parent().siblings().find('.name').text('우먼');
    }else if($(this).hasClass('mens')){
      $(this).parent().parent().siblings('.link-sc').css('background-color', '#495879');
      $(this).parent().parent().siblings('.link-sc').find('.patern').css('background-position', '0 -65px');
      $(this).parent().siblings().find('.name').text('멘즈');
    }else if($(this).hasClass('itgirl')){
      $(this).parent().parent().siblings('.link-sc').css('background-color', '#f4999d');
      $(this).parent().parent().siblings('.link-sc').find('.patern').css('background-position', '0 0');
      $(this).parent().siblings().find('.name').text('잇걸');
    }

    const rank = $(this).data('rank');
    $(rank).addClass('active').siblings().removeClass('active');
  });

  $('.sc-rank .best-group .btn-best').click(function(e){
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');

    const best = $(this).data('best');
    $(best).addClass('active').siblings().removeClass('active');
  });




  /**
   * brand
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */
  fetch('./data/brand.json')
  .then((response) => response.json())
  .then((json) => {
      data = json.items;
  
      let html = '';
 
      data.forEach(element => {
 
         html+= `<li class="brand-item">
                    <a href="" class="link-item">
                        <div class="img-box"><img src="${element.thumb}" alt="${element.title}"></div>
                        <strong class="barnd-name">${element.title}</strong>
                    </a>
                 </li>`;
      });
 
      $('#brandList').html(html);  
  });




  /**
   * deal
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */
  fetch('./data/deal.json')
  .then((response) => response.json())
  .then((json) => {
      data = json.items;
  
      let html = '';
 
      data.forEach(element => {
 
         html+= `<li class="deal-item">
                  <a href="" class="link-item">
                    <div class="img-area">
                        <div class="img-box"><img src="${element.thumb}" alt="${element.title}"></div>
                        <div class="date-box">
                            <span class="notice">종료 2일 전</span>
                        </div>
                        <div class="crop-box">
                            <span class="plus-icon">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" class="productCard_icon__1-85w"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1a1 1 0 00-2 0v2H1a1 1 0 000 2h2v2a1 1 0 102 0V5h2a1 1 0 000-2H5V1z" fill="#242424"></path></svg>
                            </span>
                            <div class="crop-img-box"><img src="${element.cropthumb}" alt="${element.title}" class="crop-img"></div>
                        </div>
                    </div>
                    <div class="text-area">
                        <div class="watch-box">
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" class="productCard_icon__1-85w"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.1 8.462V12H0V8.531c0-.277.13-.52.357-.658l2.958-1.838v-.66c-.585-.415-.942-1.11-.942-1.907V2.324C2.373 1.04 3.346 0 4.55 0s2.178 1.04 2.21 2.324v1.179c0 .798-.39 1.491-.942 1.907v.66l2.957 1.838c.162.104.293.312.325.554zM9.75 12V8.566l.033-.034v-.208l-.033-.07a1.446 1.446 0 00-.488-.832l-.032-.035-.13-.07-2.6-1.594c.553-.59.878-1.388.878-2.22V2.358c0-.624-.163-1.179-.455-1.664C7.313.243 7.865 0 8.45 0c1.203 0 2.178 1.04 2.21 2.324v1.179c0 .798-.39 1.491-.943 1.907v.66l2.958 1.838c.162.104.292.312.325.554V12H9.75z" fill="#999"></path></svg>
                            <span class="text"><span class="person">${element.person}</span>명이 구경했어요.</span>
                        </div>
                        <strong class="title-box">
                            <span class="deal-plus">
                                <svg width="34" height="18" viewBox="0 0 34 18" fill="none" class="productCard_icon__1-85w"><path d="M9 5v-.006h2.21v8.02H9V7L7 8V6l2-1zm11.128 3.11h-2.48V5.543h-1.764v2.569H13.41v1.785h2.474v2.561h1.763v-2.56h2.481V8.11zM23.5 5v.007l-2 1v2l2-1v6.014h2.21v-8.02H23.5z" fill="#fff"></path></svg>
                                <span class="blind">1+1</span>
                            </span>
                            <span class="deliver">무료배송</span>
                            ${element.title}
                        </strong>
                        <div class="price-box">
                            <div class="price-top">
                                <span class="percent">${element.percent}</span>
                                <svg width="13" height="20" viewBox="0 0 13 20" fill="none" class="productCard_icon__1-85w"><path d="M6.521 3.5c-.606 0-1.021.415-1.021 1.046v6.973l.066 1.402-1.303-1.51-1.328-1.32a.983.983 0 00-.722-.324c-.548 0-.963.407-.963.98 0 .265.108.514.315.73l4.2 4.208c.192.2.474.308.756.308.274 0 .556-.108.747-.308l4.209-4.208c.207-.216.315-.465.315-.73 0-.573-.415-.98-.963-.98-.307 0-.54.133-.73.324L8.77 11.41l-1.304 1.51.067-1.402V4.546c0-.631-.407-1.046-1.013-1.046z" fill="#F03F45"></path></svg>
                                <span class="price">${element.price}</span>
                            </div>
                            <div class="price-bottom">
                                <span class="max-percent">(최대할인가 <span class="bold">${element.maxprice}</span>원)</span>
                            </div>
                        </div>
                        <button href="" class="alarm-btn">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="productCard_icon__1-85w"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 .984H1c-.552 0-1 .434-1 .968v10.645c0 .535.448.968 1 .968h11c.552 0 1-.433 1-.968v-3.87h-1v3.87H1V1.952h4V.984z" fill="#5368FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.422a4.5 4.5 0 00-4.5 4.5v1.29a.5.5 0 01-1 0v-1.29a5.5 5.5 0 015.5-5.5h1.5a.5.5 0 010 1H11z" fill="#5368FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.64.152a.5.5 0 01.708-.011l2.5 2.419a.5.5 0 010 .719l-2.5 2.419a.5.5 0 11-.696-.719l2.129-2.06L10.652.86a.5.5 0 01-.011-.707z" fill="#5368FF"></path></svg>
                            <span class="text">소문내기</span>
                        </button>
                    </div>
                  </a>
                </li>`;
      });
 
      $('#dealList').html(html);  
  });




  /**
     * allmenu
     *
     * @version 1.0.0
     * @since 
     * @author 
     * @pram
     */
  fetch('./data/allmenu.json')
  .then((response) => response.json())
  .then((json) => {
      data = json.items;
  
      let html = '';
 
      data.forEach(element => {
 
         html+= `<li class="cate-item"> 
                  <a href="" class="link-item"> 
                    <img src="${element.icon}" alt="${element.title}"> 
                    <p class="title">${element.title}</p> 
                  </a> 
                </li>`;
      });
 
      $('#cateList').html(html);  
      $('#opencateList').html(html);  
  });




  /**
   * footer
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
  */
  $('.footer .move-to-top').click(function(e){
    e.preventDefault();

    $('html, body').scrollTop(0);
  });


   $('.footer .naver-info').click(function(e){
    e.preventDefault();

    $(this).toggleClass('active');
    $(this).siblings('.addr-area').toggleClass('active');

  });




  





});