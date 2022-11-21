const changeMap = () => {
    const selector = document.getElementById("location").value;
    const map = document.getElementById("mapper");
  
    switch (selector) {
      case "andheri":
        map.src =
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9620263600004!2d72.86239255048271!3d19.109321755826524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8383690e91b%3A0xed1a15e83c3100e6!2sSukhdayak%20Apartment%20Block-D%2C%20Shriniwas%20Bagarka%20Rd%2C%20J.B.%20Nagar%2C%20Tarun%20Bharat%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1669016493178!5m2!1sen!2sin";
        break;
      case "kandivali":
        map.src =
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.828837134947!2d72.83269530048379!3d19.202676852904716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c41746fa63%3A0xab97c561676663e7!2sSAI%20DHAM%20COMPLEX%2C%20Lalji%20Pada%20Police%20Chowk%2C%20New%20Link%20Rd%2C%20Kandivali%2C%20Shankar%20Pada%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1669017949535!5m2!1sen!2sin";
        break;
      case "thane":
        map.src =
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.230513450255!2d72.97591375048404!3d19.228783052085237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b95905ab2013%3A0x93e203f4199ea86e!2sPride%20Park%20Complex!5e0!3m2!1sen!2sin!4v1669018025327!5m2!1sen!2sin";
          break;
          case "Kharghar":
            map.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20428.116857320452!2d73.05165513664305!3d19.059473230752385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1fa2d330e2b%3A0xfb8df77eb24acba7!2sNMIMS%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1669046052058!5m2!1sen!2sin";
            break;
          case "vile-parle":
            map.src =
           "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.968256648558!2d72.8502971504826!3d19.109048455835058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c834b5849301%3A0x7a407a97034f4ca7!2svile%20parle%20%2Cmumbai!5e0!3m2!1sen!2sin!4v1669045878062!5m2!1sen!2sin";
            break;
          case "worli":
            map.src =
           "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7544.722557847519!2d72.81311059587273!3d19.00379549237057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2ab2089a2f%3A0x6baf65a87e4cdb8d!2sKalpataru%20Horizon%20Apartments!5e0!3m2!1sen!2sin!4v1669045633976!5m2!1sen!2sin";
              break;
    }
  };
  