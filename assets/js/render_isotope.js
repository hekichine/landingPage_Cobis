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
