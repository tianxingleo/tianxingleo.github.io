var posts=["posts/c725fe1a895f/","posts/f31cef78598b/","posts/e215c1943dfb/","posts/ad6732188258/","posts/6bed9573cc87/","posts/14b6f659dc49/","posts/a0a090eaa941/","posts/c2169102ce96/","posts/19f41a014456/","posts/cdf01289417f/","posts/cb56b2867ae4/","posts/9349a1cc3ded/","posts/01dddae8f26f/","posts/047ec04c09e7/","posts/88143c5a2f82/","posts/87c4bf718838/","posts/d3dc8c686753/","posts/c66e8d2525fe/","posts/de7a477bd95b/","posts/7a002479430c/","posts/1faf57500788/","posts/84a2bc9441b4/","posts/24eb1b81d5e6/","posts/96bd4016c9b9/","posts/c9c79cd93acf/","posts/577ec0d8a646/","posts/81bb78a3aa3e/","posts/9f3d03172290/","posts/bc3f702da993/","posts/df6f5c5163d4/","posts/9facef284645/","posts/786c9799be95/","posts/cb3ec6369f31/","posts/daebf52d5077/","posts/f4ecb4466107/","posts/65a829bce3b8/","posts/9bcf27f17565/","posts/0dffee20ffa1/","posts/9fa2fd5d6c31/","posts/822e33029d78/","posts/3ec4015190a2/","posts/c7964d7d0c33/","posts/260848e866df/","posts/6c8459540ae0/","posts/da06dbd20a0a/","posts/c34dbd100644/","posts/c9753b264909/","posts/30ee514397f4/","posts/85effadda5b8/","posts/febcf831abcc/","posts/7fbdcfd663ab/","posts/e8d353249210/","posts/5f1762613444/","posts/8eb6217d5656/","posts/09c9a2a109a5/","posts/6b61e1ea4de6/","posts/3de5beb47b08/","posts/f5aa71a2a585/","posts/d6c2132303da/","posts/0763f8f44d63/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };var friend_link_list=[{"name":"ratherhard","link":"https://www.ratherhard.com/","avatar":"https://avatars.githubusercontent.com/u/51701589?v=4","descr":"abaabaaba","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };