import { VeterinianVideoI, GenericDetailI } from './../../3.interfaces/models.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {


  veterinianVideos: VeterinianVideoI[] = [

    {
      title: "As a veterinarian and lover of animals.",
      description: `Sed pharetra dui nec orci viverra imperdiet ac hendrerit nisl. Sed
      metus urna, rutrum ac facilisis sit amet, luctus ut magna. Praesent id ex magna. Vivamus id maximus`,
      urlVideo: "https://www.youtube.com/embed/Zd4smpQa31k",
      titleButton: "Our service",
      type: 1
    },
    {
      title: "As a veterinarian and lover of animals.",
      description: `Sed pharetra dui nec orci viverra imperdiet ac hendrerit nisl. Sed
      metus urna, rutrum ac facilisis sit amet, luctus ut magna. Praesent id ex magna. Vivamus id maximus`,
      urlVideo: "https://www.youtube.com/embed/-2uUX9zRHqU",
      titleButton: "Our service",
      type: 2
    }
  ];


  genericDetail: GenericDetailI[] = [
    {
      title: "Title Here",
      description: "Lorem lpsum available,<br> but hte majority have suffered alteration in some form.",
      type: 1,
      listDog: [
        {
          type: 1,
          title: "Veterinarian",
          description: "Lorem lpsum available, but the majority have suffered alteration in some.",
          image: "https://micarrerauniversitaria.com/wp-content/uploads/2018/03/veterinario-1.gif"
        },
        {
          type: 1,
          title: "Veterinarian",
          description: "Lorem lpsum available,but the majority have suffered alteration in some.",
          image: "http://papelmatic.com/wp-content/uploads/2019/09/papelmatic-higiene-profesional-limpieza-desinfeccion-clinicas-veterinarias-jaulas.jpg"
        },
        {
          type: 1,
          title: "Veterinarian",
          description: "Lorem lpsum available, but the majority have suffered alteration in some.",
          image: "https://image.freepik.com/foto-gratis/concepto-medicina-cuidado-mascotas-personas-medico-veterinario-perros-clinica-veterinaria_155003-4846.jpg"
        }
      ],
      typeColor:2
    },
    {
      title: "Title Here",
      description: "Lorem lpsum available,<br> but hte majority have suffered alteration in some form.",
      type: 1,
      listDog: [
        {
          type: 2,
          priceNow: 50,
          priceBefore: 30,
          image: "https://www.convives.net/wp-content/uploads/2019/07/perro.jpg"
        },
        {
          type: 2,
          priceNow: 40,
          priceBefore: 25,
          image: "https://static6.depositphotos.com/1007995/625/i/600/depositphotos_6255929-stock-photo-two-cute-labrador-puppies.jpg"
        },
        {
          type: 2,
          priceNow: 45,
          priceBefore: 20,
          image: "https://www.nationalgeographic.com.es/medio/2019/09/09/bull-dog-ingles_043b09e1_800x800.jpg"
        }
      ],
      typeColor:2
    },
    {
      title: "The vectcare team",
      description: "Loremp lpsum available, but hte majority have suffered alteration in some form",
      type: 2,
      listVeterinaries: [
        {
          name: "Jennifer Mulien",
          career: "VETERINARY",
          image: "https://thumbs.dreamstime.com/z/mujer-del-m%C3%A9dico-18738662.jpg"
        },
        {
          name: "Sheeren Collins",
          career: "ADMINISTRATION",
          image: "https://thumbs.dreamstime.com/z/mujer-m%C3%A9dica-21712156.jpg"
        },
        {
          name: "Jennifer Mullen",
          career: "VETERINARY",
          image: "https://thumbs.dreamstime.com/z/la-doctora-est%C3%A1-de-pie-con-los-documentos-en-cl%C3%ADnica-156945512.jpg"
        }
      ],
      typeColor:1   
    },
    {
      title: "Recebt Posts",
      description: "Loremp lpsum available,<br> but hte majority have suffered alteration in some form",
      type: 3,
      listVetrinaryNews: [
        {
          title:"As a veterinarian and lover of animals",
          date:"FEBRUARY 09, 2020",
          description:"Lorem lpsum available, but the majority have suffered alteration in some words wich look",
          extraInfo:"Read More+",
          image:"https://www.consumer.es/wp-content/uploads/2019/07/img_veterinarios-cada-cuanto-tiempo-perros-gatos-art.jpg"
        },
        {
          title:"As a veterinarian and lover of animals",
          date:"FEBRUARY 10, 2020",
          description:"Lorem lpsum available, but the majority have suffered alteration in some words wich look",
          extraInfo:"Read More+",
          image:"https://m.media-amazon.com/images/I/413ExytT8KL._AC_SS450_.jpg"
        },
        {
          title:"As a veterinarian and lover of animals",
          date:"FEBRUARY 11, 2020",
          description:"Lorem lpsum available, but the majority have suffered alteration in some words wich look",
          extraInfo:"Read More+",
          image:"https://dam.ngenespanol.com/wp-content/uploads/2020/05/000_1RI5PR.jpg"
        }
        
      ],
      typeColor:1   
    }
  ]


constructor() { }

ngOnInit(): void {
}

}
