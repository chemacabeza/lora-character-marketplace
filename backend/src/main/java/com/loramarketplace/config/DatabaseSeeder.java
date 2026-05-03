package com.loramarketplace.config;

import com.loramarketplace.model.Product;
import com.loramarketplace.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DatabaseSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;

    @Override
    public void run(String... args) {
        if (productRepository.count() == 0) {

            Product p1 = new Product();
            p1.setName("Emma from Ireland");
            p1.setDescription("Age 26 · 1.75m");
            p1.setBaseModel("SDXL 1.0");
            p1.setPriceCents(999);
            p1.setImageUrl("/images/loras/emma.jpg");
            p1.setSafetensorsS3Key("public/loras/1/model.safetensors");
            productRepository.save(p1);

            Product p2 = new Product();
            p2.setName("Hildur from Iceland");
            p2.setDescription("Age 28 · 1.72m");
            p2.setBaseModel("SDXL 1.0");
            p2.setPriceCents(999);
            p2.setImageUrl("/images/loras/hildur.jpg");
            p2.setSafetensorsS3Key("public/loras/2/model.safetensors");
            productRepository.save(p2);

            Product p3 = new Product();
            p3.setName("Elif from Turkey");
            p3.setDescription("Age 27 · 1.68m");
            p3.setBaseModel("SDXL 1.0");
            p3.setPriceCents(999);
            p3.setImageUrl("/images/loras/elif.jpg");
            p3.setSafetensorsS3Key("public/loras/3/model.safetensors");
            productRepository.save(p3);

            Product p4 = new Product();
            p4.setName("Marie from France");
            p4.setDescription("Age 25 · 1.70m");
            p4.setBaseModel("SDXL 1.0");
            p4.setPriceCents(999);
            p4.setImageUrl("/images/loras/marie.jpg");
            p4.setSafetensorsS3Key("public/loras/4/model.safetensors");
            productRepository.save(p4);

            Product p5 = new Product();
            p5.setName("Dilnoza from Uzbekistan");
            p5.setDescription("Age 24 · 1.65m");
            p5.setBaseModel("SDXL 1.0");
            p5.setPriceCents(999);
            p5.setImageUrl("/images/loras/dilnoza.jpg");
            p5.setSafetensorsS3Key("public/loras/5/model.safetensors");
            productRepository.save(p5);

            Product p6 = new Product();
            p6.setName("Charlize from South Africa");
            p6.setDescription("Age 29 · 1.77m");
            p6.setBaseModel("SDXL 1.0");
            p6.setPriceCents(999);
            p6.setImageUrl("/images/loras/charlize.jpg");
            p6.setSafetensorsS3Key("public/loras/6/model.safetensors");
            productRepository.save(p6);

            Product p7 = new Product();
            p7.setName("Alina from Belarus");
            p7.setDescription("Age 26 · 1.71m");
            p7.setBaseModel("SDXL 1.0");
            p7.setPriceCents(999);
            p7.setImageUrl("/images/loras/alina.jpg");
            p7.setSafetensorsS3Key("public/loras/7/model.safetensors");
            productRepository.save(p7);

            Product p8 = new Product();
            p8.setName("Gabriela from Romania");
            p8.setDescription("Age 25 · 1.69m");
            p8.setBaseModel("SDXL 1.0");
            p8.setPriceCents(999);
            p8.setImageUrl("/images/loras/gabriela.jpg");
            p8.setSafetensorsS3Key("public/loras/8/model.safetensors");
            productRepository.save(p8);

            Product p9 = new Product();
            p9.setName("Olga from Russia");
            p9.setDescription("Age 30 · 1.73m");
            p9.setBaseModel("SDXL 1.0");
            p9.setPriceCents(999);
            p9.setImageUrl("/images/loras/olga.jpg");
            p9.setSafetensorsS3Key("public/loras/9/model.safetensors");
            productRepository.save(p9);

            Product p10 = new Product();
            p10.setName("Naran from Mongolia");
            p10.setDescription("Age 24 · 1.63m");
            p10.setBaseModel("SDXL 1.0");
            p10.setPriceCents(999);
            p10.setImageUrl("/images/loras/naran.jpg");
            p10.setSafetensorsS3Key("public/loras/10/model.safetensors");
            productRepository.save(p10);

            Product p11 = new Product();
            p11.setName("Carmen from Spain");
            p11.setDescription("Age 28 · 1.68m");
            p11.setBaseModel("SDXL 1.0");
            p11.setPriceCents(999);
            p11.setImageUrl("/images/loras/carmen.jpg");
            p11.setSafetensorsS3Key("public/loras/11/model.safetensors");
            productRepository.save(p11);

            Product p12 = new Product();
            p12.setName("Valentina from Colombia");
            p12.setDescription("Age 25 · 1.67m");
            p12.setBaseModel("SDXL 1.0");
            p12.setPriceCents(999);
            p12.setImageUrl("/images/loras/valentina.jpg");
            p12.setSafetensorsS3Key("public/loras/12/model.safetensors");
            productRepository.save(p12);

            Product p13 = new Product();
            p13.setName("Priya from India");
            p13.setDescription("Age 27 · 1.62m");
            p13.setBaseModel("SDXL 1.0");
            p13.setPriceCents(999);
            p13.setImageUrl("/images/loras/priya.jpg");
            p13.setSafetensorsS3Key("public/loras/13/model.safetensors");
            productRepository.save(p13);

            Product p14 = new Product();
            p14.setName("Olena from Ukraine");
            p14.setDescription("Age 26 · 1.70m");
            p14.setBaseModel("SDXL 1.0");
            p14.setPriceCents(999);
            p14.setImageUrl("/images/loras/olena.jpg");
            p14.setSafetensorsS3Key("public/loras/14/model.safetensors");
            productRepository.save(p14);

            Product p15 = new Product();
            p15.setName("Zoya from Kazakhstan");
            p15.setDescription("Age 24 · 1.66m");
            p15.setBaseModel("SDXL 1.0");
            p15.setPriceCents(999);
            p15.setImageUrl("/images/loras/zoya.jpg");
            p15.setSafetensorsS3Key("public/loras/15/model.safetensors");
            productRepository.save(p15);

            Product p16 = new Product();
            p16.setName("Dalia from Mexico");
            p16.setDescription("Age 26 · 1.65m");
            p16.setBaseModel("SDXL 1.0");
            p16.setPriceCents(999);
            p16.setImageUrl("/images/loras/dalia.jpg");
            p16.setSafetensorsS3Key("public/loras/16/model.safetensors");
            productRepository.save(p16);

            Product p17 = new Product();
            p17.setName("Anna from Poland");
            p17.setDescription("Age 27 · 1.70m");
            p17.setBaseModel("SDXL 1.0");
            p17.setPriceCents(999);
            p17.setImageUrl("/images/loras/anna.jpg");
            p17.setSafetensorsS3Key("public/loras/17/model.safetensors");
            productRepository.save(p17);

            Product p18 = new Product();
            p18.setName("Nora from Norway");
            p18.setDescription("Age 25 · 1.72m");
            p18.setBaseModel("SDXL 1.0");
            p18.setPriceCents(999);
            p18.setImageUrl("/images/loras/nora.jpg");
            p18.setSafetensorsS3Key("public/loras/18/model.safetensors");
            productRepository.save(p18);

            Product p19 = new Product();
            p19.setName("Tina from Croatia");
            p19.setDescription("Age 26 · 1.69m");
            p19.setBaseModel("SDXL 1.0");
            p19.setPriceCents(999);
            p19.setImageUrl("/images/loras/tina.jpg");
            p19.setSafetensorsS3Key("public/loras/19/model.safetensors");
            productRepository.save(p19);

            Product p20 = new Product();
            p20.setName("Aaju from Greenland");
            p20.setDescription("Age 24 · 1.60m");
            p20.setBaseModel("SDXL 1.0");
            p20.setPriceCents(999);
            p20.setImageUrl("/images/loras/aaju.jpg");
            p20.setSafetensorsS3Key("public/loras/20/model.safetensors");
            productRepository.save(p20);

            Product p21 = new Product();
            p21.setName("Maria from Brazil");
            p21.setDescription("Age 28 · 1.68m");
            p21.setBaseModel("SDXL 1.0");
            p21.setPriceCents(999);
            p21.setImageUrl("/images/loras/maria.jpg");
            p21.setSafetensorsS3Key("public/loras/21/model.safetensors");
            productRepository.save(p21);

            Product p22 = new Product();
            p22.setName("Anne from Denmark");
            p22.setDescription("Age 27 · 1.73m");
            p22.setBaseModel("SDXL 1.0");
            p22.setPriceCents(999);
            p22.setImageUrl("/images/loras/anne.jpg");
            p22.setSafetensorsS3Key("public/loras/22/model.safetensors");
            productRepository.save(p22);

            Product p23 = new Product();
            p23.setName("Milica from Serbia");
            p23.setDescription("Age 25 · 1.68m");
            p23.setBaseModel("SDXL 1.0");
            p23.setPriceCents(999);
            p23.setImageUrl("/images/loras/milica.jpg");
            p23.setSafetensorsS3Key("public/loras/23/model.safetensors");
            productRepository.save(p23);

            Product p24 = new Product();
            p24.setName("Amina from Morocco");
            p24.setDescription("Age 26 · 1.64m");
            p24.setBaseModel("SDXL 1.0");
            p24.setPriceCents(999);
            p24.setImageUrl("/images/loras/amina.png");
            p24.setSafetensorsS3Key("public/loras/24/model.safetensors");
            productRepository.save(p24);

            Product p25 = new Product();
            p25.setName("Sheila from Nigeria");
            p25.setDescription("Age 27 · 1.66m");
            p25.setBaseModel("SDXL 1.0");
            p25.setPriceCents(999);
            p25.setImageUrl("/images/loras/sheila.jpg");
            p25.setSafetensorsS3Key("public/loras/25/model.safetensors");
            productRepository.save(p25);

            Product p26 = new Product();
            p26.setName("Stefi from Czech Republic");
            p26.setDescription("Age 24 · 1.70m");
            p26.setBaseModel("SDXL 1.0");
            p26.setPriceCents(999);
            p26.setImageUrl("/images/loras/stefi.jpg");
            p26.setSafetensorsS3Key("public/loras/26/model.safetensors");
            productRepository.save(p26);

            Product p27 = new Product();
            p27.setName("Lara from Portugal");
            p27.setDescription("Age 26 · 1.67m");
            p27.setBaseModel("SDXL 1.0");
            p27.setPriceCents(999);
            p27.setImageUrl("/images/loras/lara.jpg");
            p27.setSafetensorsS3Key("public/loras/27/model.safetensors");
            productRepository.save(p27);

            Product p28 = new Product();
            p28.setName("Kasia from Poland");
            p28.setDescription("Age 25 · 1.69m");
            p28.setBaseModel("SDXL 1.0");
            p28.setPriceCents(999);
            p28.setImageUrl("/images/loras/kasia.jpg");
            p28.setSafetensorsS3Key("public/loras/28/model.safetensors");
            productRepository.save(p28);

            Product p29 = new Product();
            p29.setName("Svetlana from Bulgaria");
            p29.setDescription("Age 28 · 1.71m");
            p29.setBaseModel("SDXL 1.0");
            p29.setPriceCents(999);
            p29.setImageUrl("/images/loras/svetlana.jpg");
            p29.setSafetensorsS3Key("public/loras/29/model.safetensors");
            productRepository.save(p29);

            Product p30 = new Product();
            p30.setName("Sofia from Greece");
            p30.setDescription("Age 26 · 1.68m");
            p30.setBaseModel("SDXL 1.0");
            p30.setPriceCents(999);
            p30.setImageUrl("/images/loras/sofia.jpg");
            p30.setSafetensorsS3Key("public/loras/30/model.safetensors");
            productRepository.save(p30);

            Product p31 = new Product();
            p31.setName("Juanita from Argentina");
            p31.setDescription("Age 27 · 1.66m");
            p31.setBaseModel("SDXL 1.0");
            p31.setPriceCents(999);
            p31.setImageUrl("/images/loras/juanita.jpg");
            p31.setSafetensorsS3Key("public/loras/31/model.safetensors");
            productRepository.save(p31);

            Product p32 = new Product();
            p32.setName("Giulia from Italy");
            p32.setDescription("Age 25 · 1.70m");
            p32.setBaseModel("SDXL 1.0");
            p32.setPriceCents(999);
            p32.setImageUrl("/images/loras/giulia.jpg");
            p32.setSafetensorsS3Key("public/loras/32/model.safetensors");
            productRepository.save(p32);

            Product p33 = new Product();
            p33.setName("Fiona from Scotland");
            p33.setDescription("Age 26 · 1.72m");
            p33.setBaseModel("SDXL 1.0");
            p33.setPriceCents(999);
            p33.setImageUrl("/images/loras/fiona.jpg");
            p33.setSafetensorsS3Key("public/loras/33/model.safetensors");
            productRepository.save(p33);

            Product p34 = new Product();
            p34.setName("Helga from Germany");
            p34.setDescription("Age 29 · 1.74m");
            p34.setBaseModel("SDXL 1.0");
            p34.setPriceCents(999);
            p34.setImageUrl("/images/loras/helga.jpg");
            p34.setSafetensorsS3Key("public/loras/34/model.safetensors");
            productRepository.save(p34);

            Product p35 = new Product();
            p35.setName("Hana from Japan");
            p35.setDescription("Age 24 · 1.60m");
            p35.setBaseModel("SDXL 1.0");
            p35.setPriceCents(999);
            p35.setImageUrl("/images/loras/hana.jpg");
            p35.setSafetensorsS3Key("public/loras/35/model.safetensors");
            productRepository.save(p35);

            Product p36 = new Product();
            p36.setName("Inga from Finland");
            p36.setDescription("Age 27 · 1.73m");
            p36.setBaseModel("SDXL 1.0");
            p36.setPriceCents(999);
            p36.setImageUrl("/images/loras/inga.jpg");
            p36.setSafetensorsS3Key("public/loras/36/model.safetensors");
            productRepository.save(p36);

            Product p37 = new Product();
            p37.setName("Mariam from Georgia");
            p37.setDescription("Age 25 · 1.65m");
            p37.setBaseModel("SDXL 1.0");
            p37.setPriceCents(999);
            p37.setImageUrl("/images/loras/mariam.png");
            p37.setSafetensorsS3Key("public/loras/37/model.safetensors");
            productRepository.save(p37);

            Product p38 = new Product();
            p38.setName("Chen from China");
            p38.setDescription("Age 26 · 1.62m");
            p38.setBaseModel("SDXL 1.0");
            p38.setPriceCents(999);
            p38.setImageUrl("/images/loras/chen.jpg");
            p38.setSafetensorsS3Key("public/loras/38/model.safetensors");
            productRepository.save(p38);

            Product p39 = new Product();
            p39.setName("Anastasia from Russia");
            p39.setDescription("Age 25 · 1.71m");
            p39.setBaseModel("SDXL 1.0");
            p39.setPriceCents(999);
            p39.setImageUrl("/images/loras/anastasia.png");
            p39.setSafetensorsS3Key("public/loras/39/model.safetensors");
            productRepository.save(p39);

            Product p40 = new Product();
            p40.setName("Allison from USA");
            p40.setDescription("Age 28 · 1.69m");
            p40.setBaseModel("SDXL 1.0");
            p40.setPriceCents(999);
            p40.setImageUrl("/images/loras/allison.jpg");
            p40.setSafetensorsS3Key("public/loras/40/model.safetensors");
            productRepository.save(p40);

            Product p41 = new Product();
            p41.setName("Rabab from Egypt");
            p41.setDescription("Age 26 · 1.64m");
            p41.setBaseModel("SDXL 1.0");
            p41.setPriceCents(999);
            p41.setImageUrl("/images/loras/rabab.jpg");
            p41.setSafetensorsS3Key("public/loras/41/model.safetensors");
            productRepository.save(p41);

            Product p42 = new Product();
            p42.setName("Iuliia from Ukraine");
            p42.setDescription("Age 27 · 1.70m");
            p42.setBaseModel("SDXL 1.0");
            p42.setPriceCents(999);
            p42.setImageUrl("/images/loras/iuliia.jpg");
            p42.setSafetensorsS3Key("public/loras/42/model.safetensors");
            productRepository.save(p42);

            System.out.println("Seeded database with 42 LoRAs.");
        }
    }
}
