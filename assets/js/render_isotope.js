let dataGrid = [
  {
    id: "1",
    title: "Home Default",
    image_url: "./assets/isotope/homepage/Fashion01.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "2",
    title: "Home Season",
    image_url: "./assets/isotope/homepage/Fashion02.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "3",
    title: "Home Classic",
    image_url: "./assets/isotope/homepage/Fashion03.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "4",
    title: "Home Slide Show",
    image_url: "./assets/isotope/homepage/Fashion04.png",
    link_url: "#",
    isotope: "other",
  },
  {
    id: "5",
    title: "Home Categories",
    image_url: "./assets/isotope/homepage/Fashion05.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "6",
    title: "Home Best Selling",
    image_url: "./assets/isotope/homepage/Fashion06.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "7",
    title: "Home Lookbook",
    image_url: "./assets/isotope/homepage/Fashion07.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "8",
    title: "Home Collection",
    image_url: "./assets/isotope/homepage/Fashion08.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "9",
    title: "Home New Trends",
    image_url: "./assets/isotope/homepage/Fashion09.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "10",
    title: "Home Menu Vertical",
    image_url: "./assets/isotope/homepage/Fashion10.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "11",
    title: "Home Funiture 01",
    image_url: "./assets/isotope/homepage/Furniture01.png",
    link_url: "#",
    isotope: "furniture",
  },
  {
    id: "12",
    title: "Home Funiture 02",
    image_url: "./assets/isotope/homepage/Furniture02.png",
    link_url: "#",
    isotope: "furniture",
  },
  {
    id: "13",
    title: "Home Digital",
    image_url: "./assets/isotope/homepage/Electronic.png",
    link_url: "#",
    isotope: "electronics",
  },
  {
    id: "14",
    title: "Home Flower",
    image_url: "./assets/isotope/homepage/Flower.png",
    link_url: "#",
    isotope: "flower",
  },
  {
    id: "15",
    title: "Home Sport",
    image_url: "./assets/isotope/homepage/Sport.png",
    link_url: "#",
    isotope: "sport",
  },
  {
    id: "16",
    title: "Home Funiture 03",
    image_url: "./assets/isotope/homepage/Furniture03.png",
    link_url: "#",
    isotope: "furniture",
  },
  {
    id: "17",
    title: "Home Funiture 04",
    image_url: "./assets/isotope/homepage/Furniture04.png",
    link_url: "#",
    isotope: "furniture",
  },
  {
    id: "18",
    title: "Home Funiture 05",
    image_url: "./assets/isotope/homepage/Furniture05.png",
    link_url: "#",
    isotope: "furniture",
  },
  {
    id: "19",
    title: "Home Funiture 06",
    image_url: "./assets/isotope/homepage/Furniture06.png",
    link_url: "#",
    isotope: "furniture",
  },
  {
    id: "20",
    title: "Home Fashion 11",
    image_url: "./assets/isotope/homepage/Fashion11.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "21",
    title: "Home Fashion 12",
    image_url: "./assets/isotope/homepage/Fashion12.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "22",
    title: "Home Fashion 13",
    image_url: "./assets/isotope/homepage/Fashion13.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "23",
    title: "Home Fashion 14",
    image_url: "./assets/isotope/homepage/Fashion14.png",
    link_url: "#",
    isotope: "fashion",
  },
  {
    id: "24",
    title: "Home Fashion 15",
    image_url: "./assets/isotope/homepage/Fashion15.png",
    link_url: "#",
    isotope: "fashion",
  },
];

let grid_item = document.querySelector(".t4s-isotope-grid");

let htmls = dataGrid.map((item, index) => {
  return `<div class="t4s-col-item ${item.isotope} col-lg-4 col-md-4 col-sm-6 col-12">
    <div class="t4s-item-inner ratio-4x3">
      <div
        class="t4s-item-img ratio t4s-oh"
        style="
          background-image: url('${item.image_url}');
        "
      >
        <a href="${item.link_url}"> </a>
      </div>
      <div class="t4s-homepage-title">
        <p><a href="${item.link_url}">${item.title}</a></p>
      </div>
    </div>
  </div>`;
});

grid_item.innerHTML = htmls.join(" ");

// render exclusive grid
let exclusive_grid = document.querySelector(".t4s-gird-exclusive");

let dataExclusive = [
  {
    id: 1,
    url_thumbnail: "./assets/img/exclusive/1.png",
    exclusive_save: "",
    title: "EComposer",
    des: "Get Theme Partner plan for FREE",
  },
  {
    id: 2,
    url_thumbnail: "./assets/img/exclusive/2.png",
    exclusive_save: "20%",
    title: "LayoutHub",
    des: "20% OFF on all Paid plans",
  },
  {
    id: 3,
    url_thumbnail: "./assets/img/exclusive/3.png",
    exclusive_save: "50%",
    title: "Avada",
    des: "50% OFF for all paid plans for 3 months",
  },
  {
    id: 4,
    url_thumbnail: "./assets/img/exclusive/4.png",
    exclusive_save: "",
    title: "Growave",
    des: "Extended 30-day free trial",
  },
  {
    id: 5,
    url_thumbnail: "./assets/img/exclusive/5.png",
    exclusive_save: "",
    title: "Ryviu",
    des: "Premium review app",
  },
  {
    id: 6,
    url_thumbnail: "./assets/img/exclusive/6.png",
    exclusive_save: "10%",
    title: "Loox",
    des: "Get 10% discount",
  },
  {
    id: 7,
    url_thumbnail: "./assets/img/exclusive/7.png",
    exclusive_save: "20%",
    title: "Weglot",
    des: "Get 20% off for lifetime plan",
  },
  {
    id: 8,
    url_thumbnail: "./assets/img/exclusive/8.png",
    exclusive_save: "",
    title: "Ali Reviews",
    des: "Priority support",
  },
  {
    id: 9,
    url_thumbnail: "./assets/img/exclusive/9.png",
    exclusive_save: "50%",
    title: "Mailchimp",
    des: "50% OFF on all Paid plans",
  },
  {
    id: 10,
    url_thumbnail: "./assets/img/exclusive/10.png",
    exclusive_save: "",
    title: "Flowio",
    des: "Free 20K emails + all advanced features",
  },
  {
    id: 11,
    url_thumbnail: "./assets/img/exclusive/11.png",
    exclusive_save: "20%",
    title: "FlashSearch",
    des: "Get 20% OFF on all Paid plans",
  },
  {
    id: 12,
    url_thumbnail: "./assets/img/exclusive/12.png",
    exclusive_save: "",
    title: "SoBooster",
    des: "Priority support",
  },
];

let html1s = dataExclusive.map((item, index) => {
  return `<div class="t4s-col-item">
              <div class="t4s-item-inner">
                <div
                  class="t4s-item-img d-flex justify-content-center align-items-center"
                >
                  <div class="t4s-item-thumbnail t4s-pr">
                      <img src="${item.url_thumbnail}" />
                      ${
                        item.exclusive_save
                          ? `<div class="t4s-save-tag t4s-pa"><span>Save ${item.exclusive_save}</span></div>`
                          : ""
                      }
                  </div>
                </div>
                <div class="t4s-item-content">
                  <h4>${item.title}</h4>
                  <p>${item.des}</p>
                </div>
              </div>
            </div>`;
});
exclusive_grid.innerHTML = html1s.join(" ");
