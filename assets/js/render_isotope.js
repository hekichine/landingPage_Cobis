let dataGrid = [
  {
    id: "1",
    title: "Home Default",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "2",
    title: "Home Season",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "3",
    title: "Home Classic",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "4",
    title: "Home Slide Show",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "5",
    title: "Home Categories",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "6",
    title: "Home Best Selling",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "7",
    title: "Home Lookbook",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "8",
    title: "Home Collection",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "9",
    title: "Home New Trends",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "10",
    title: "Home Menu Vertical",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "11",
    title: "Home Funiture 01",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "12",
    title: "Home Funiture 02",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "13",
    title: "Home Digital",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "14",
    title: "Home Flower",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "15",
    title: "Home Sport",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "16",
    title: "Home Funiture 03",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "17",
    title: "Home Funiture 04",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "18",
    title: "Home Funiture 05",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "19",
    title: "Home Funiture 06",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "20",
    title: "Home Fashion 11",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "21",
    title: "Home Fashion 12",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "22",
    title: "Home Fashion 13",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "23",
    title: "Home Fashion 14",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
  {
    id: "24",
    title: "Home Fashion 15",
    image_url: "./assets/isotope/homepage/Fashion-01.jpg",
    link_url: "#",
  },
];

let grid_item = document.querySelector(".t4s-isotope-grid");

let htmls = dataGrid.map((item, index) => {
  return `<div class="t4s-col-item col-lg-4 col-md-4 col-sm-6 col-12">
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
