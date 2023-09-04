const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "venta1.jpg",
    descripcion:
      "Moderno apartamento estudio recién renovado en planta baja. Tranquilo, acogedor y mucha luz natural. Un montón de estacionamiento en la calle. 25 minutos al centro de Manhattan",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor con vista al puente",
    src: "venta2.webp",
    descripcion:
      "Ubicado en el corazón de Newark y con una ubicación privilegiada cerca del Prudential Center... ¡estás a un tiro de piedra de toda la acción! Limpiado profesionalmente + Desinfectado.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 2,
    costo: 3200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "venta3.jpg",
    descripcion:
      "Este penthouse de lujo, que ha sido bellamente decorado e incluye todos los servicios para disfrutar de una estadía cómoda y agradable. Disfrute de una bebida o una taza de café mientras descansa en su patio privado y jardín.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 2,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Acogedora casa en zona residencial",
    src: "venta4.webp",
    descripcion: "Casa en zona residencial pero a pocos metros de la ciudad",
    ubicacion: "968 Patricks Avenue, Rowland",
    habitaciones: 4,
    banos: 4,
    costo: 3500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Acogedora casa en el centro de Chicago",
    src: "venta5.webp",
    descripcion:
      "Este lugar especial en el segundo piso está cerca de todo lo que necesitas, por lo que será fácil planear tu visita. Hay estacionamiento gratuito disponible",
    ubicacion: "Newark, Nueva Jersey",
    habitaciones: 3,
    banos: 2,
    costo: 3000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento lujoso con vista panorámica",
    src: "venta6.webp",
    descripcion:
      "Saborea la delicia de la vista Paramount. Puertas (2 manzanas) lejos del Prudential Center, a pocos minutos de la estación de Newark Penn y a pocos minutos de la mejor comida cultural del Distrito de Hierro",
    ubicacion: "Walker 's Paradise 93 / Rider' s Paradise 98 / Muy Bikeable 77",
    habitaciones: 3,
    banos: 2,
    costo: 3000,
    smoke: true,
    pets: true,
  },
];

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "alquiler1.jpg",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 912348",
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "alquiler2.jpg",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "alquiler3.jpg",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Departamento al pie de la montaña",
    src: "alquiler4.jpg",
    descripcion:
      "Este elegante departamento se conecta con el pie de la montaña",
    ubicacion: "280 Summer Street, Boston, MA 02210",
    habitaciones: 2,
    banos: 1,
    costo: 1800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento en el corazón de la ciudad",
    src: "alquiler5.webp",
    descripcion:
      "Ubicado en el centro de restaurantes, centros comerciales, la ciudad de Nueva York y el aeropuerto EWR. Un hogar lejos de casa.",
    ubicacion: "Newark, Nueva Jersey",
    habitaciones: 2,
    banos: 1,
    costo: 3200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento de dos pisos",
    src: "alquiler6.avif",
    descripcion:
      "Ubicado convenientemente entre el aeropuerto de Newark y la ciudad de Nueva York, este apartamento privado es perfecto para los visitantes fuera de la ciudad",
    ubicacion: "Montrose ave 3890",
    habitaciones: 4,
    banos: 3,
    costo: 5200,
    smoke: false,
    pets: true,
  },
];

const getCardsTemplate = (data, numberOfCards = data.length) => {
  let template = "";

  for (let i = 0; i < numberOfCards; i++) {
    template += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="./assets/img/${data[i].src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="cardd-title">
                        ${data[i].nombre}
                    </h5>
                    <p class="cardd-text">
                        ${data[i].descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        ${data[i].ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${
                          data[i].habitaciones
                        } Habitaciones |
                        <i class="fas fa-bath"></i> ${data[i].banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${data[i].costo}</p>
                    <p class="${
                      data[i].smoke ? "text-success" : "text-danger"
                    }">
                        ${
                          data[i].smoke
                            ? '<i class="fas fa-smoking"></i> Permitido fumar'
                            : '<i class="fas fa-smoking-ban"></i> No se permite fumar'
                        }
                    </p>
                    <p class="${data[i].pets ? "text-success" : "text-danger"}">
                        ${
                          data[i].pets
                            ? '<i class="fas fa-paw"></i> Mascotas permitidas'
                            : '<i class="fas fa-ban"></i> No se permiten mascotas'
                        }

                    </p>
                </div>
            </div>
        </div>
        `;
  }

  return template;
};

const sellContainer = document.querySelector("#venta .row");
const rentContainer = document.querySelector("#alquiler .row");

const currentPage = location.pathname;

switch (currentPage) {
  case "/index.html":
    rentContainer.innerHTML = getCardsTemplate(propiedades_alquiler, 3);
    sellContainer.innerHTML = getCardsTemplate(propiedades_venta, 3);
    break;

  case "/propiedades_alquiler.html":
    rentContainer.innerHTML = getCardsTemplate(propiedades_alquiler);
    break;

  case "/propiedades_venta.html":
    sellContainer.innerHTML = getCardsTemplate(propiedades_venta);
    break;

  default:
    console.error("Página no reconocida:", currentPage);
    break;
}
