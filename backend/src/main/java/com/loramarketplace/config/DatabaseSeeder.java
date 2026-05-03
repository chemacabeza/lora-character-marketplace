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
            p1.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c0c1a0f6-7a0a-4319-96c8-e1f91aa9a311/original=true/129099726.jpeg");
            p1.setSafetensorsS3Key("public/loras/1/model.safetensors");
            productRepository.save(p1);

            Product p2 = new Product();
            p2.setName("Hildur from Iceland");
            p2.setDescription("Age 28 · 1.72m");
            p2.setBaseModel("SDXL 1.0");
            p2.setPriceCents(999);
            p2.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/99b10433-6c7b-46ef-8585-168022926cdb/original=true/129132369.jpeg");
            p2.setSafetensorsS3Key("public/loras/2/model.safetensors");
            productRepository.save(p2);

            Product p3 = new Product();
            p3.setName("Elif from Turkey");
            p3.setDescription("Age 27 · 1.68m");
            p3.setBaseModel("SDXL 1.0");
            p3.setPriceCents(999);
            p3.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d581b472-e25a-4c7c-bfb2-d742316cffd3/original=true/128950588.jpeg");
            p3.setSafetensorsS3Key("public/loras/3/model.safetensors");
            productRepository.save(p3);

            Product p4 = new Product();
            p4.setName("Marie from France");
            p4.setDescription("Age 25 · 1.70m");
            p4.setBaseModel("SDXL 1.0");
            p4.setPriceCents(999);
            p4.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c451e0d5-d6a1-4b9e-840c-e051f7a67338/original=true/129050259.jpeg");
            p4.setSafetensorsS3Key("public/loras/4/model.safetensors");
            productRepository.save(p4);

            Product p5 = new Product();
            p5.setName("Dilnoza from Uzbekistan");
            p5.setDescription("Age 24 · 1.65m");
            p5.setBaseModel("SDXL 1.0");
            p5.setPriceCents(999);
            p5.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f0ec8123-fdc6-48c3-afd0-dd63d02c50de/original=true/127336926.jpeg");
            p5.setSafetensorsS3Key("public/loras/5/model.safetensors");
            productRepository.save(p5);

            Product p6 = new Product();
            p6.setName("Charlize from South Africa");
            p6.setDescription("Age 29 · 1.77m");
            p6.setBaseModel("SDXL 1.0");
            p6.setPriceCents(999);
            p6.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8bb943b3-76d0-427c-9798-5ae55d881ec1/original=true/125437607.jpeg");
            p6.setSafetensorsS3Key("public/loras/6/model.safetensors");
            productRepository.save(p6);

            Product p7 = new Product();
            p7.setName("Alina from Belarus");
            p7.setDescription("Age 26 · 1.71m");
            p7.setBaseModel("SDXL 1.0");
            p7.setPriceCents(999);
            p7.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/45f2d6a3-27fc-483a-a94f-93df50851028/original=true/124653293.jpeg");
            p7.setSafetensorsS3Key("public/loras/7/model.safetensors");
            productRepository.save(p7);

            Product p8 = new Product();
            p8.setName("Gabriela from Romania");
            p8.setDescription("Age 25 · 1.69m");
            p8.setBaseModel("SDXL 1.0");
            p8.setPriceCents(999);
            p8.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2cc70d69-19f6-4c5b-a81d-c62c2817e559/original=true/124464358.jpeg");
            p8.setSafetensorsS3Key("public/loras/8/model.safetensors");
            productRepository.save(p8);

            Product p9 = new Product();
            p9.setName("Olga from Russia");
            p9.setDescription("Age 30 · 1.73m");
            p9.setBaseModel("SDXL 1.0");
            p9.setPriceCents(999);
            p9.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5a6c1d27-1589-47a9-b9c3-58d59d0d0e12/original=true/123859534.jpeg");
            p9.setSafetensorsS3Key("public/loras/9/model.safetensors");
            productRepository.save(p9);

            Product p10 = new Product();
            p10.setName("Naran from Mongolia");
            p10.setDescription("Age 24 · 1.63m");
            p10.setBaseModel("SDXL 1.0");
            p10.setPriceCents(999);
            p10.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4711cbbc-24b7-4d97-8df2-15060958996c/original=true/122579561.jpeg");
            p10.setSafetensorsS3Key("public/loras/10/model.safetensors");
            productRepository.save(p10);

            Product p11 = new Product();
            p11.setName("Carmen from Spain");
            p11.setDescription("Age 28 · 1.68m");
            p11.setBaseModel("SDXL 1.0");
            p11.setPriceCents(999);
            p11.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2c41df75-92c9-4999-8cbc-b11f119a96ce/original=true/122450824.jpeg");
            p11.setSafetensorsS3Key("public/loras/11/model.safetensors");
            productRepository.save(p11);

            Product p12 = new Product();
            p12.setName("Valentina from Colombia");
            p12.setDescription("Age 25 · 1.67m");
            p12.setBaseModel("SDXL 1.0");
            p12.setPriceCents(999);
            p12.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ccdcb144-096c-4af7-a5f7-5165990de92c/original=true/121971479.jpeg");
            p12.setSafetensorsS3Key("public/loras/12/model.safetensors");
            productRepository.save(p12);

            Product p13 = new Product();
            p13.setName("Priya from India");
            p13.setDescription("Age 27 · 1.62m");
            p13.setBaseModel("SDXL 1.0");
            p13.setPriceCents(999);
            p13.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ed6d0860-501d-4caf-b01e-6a97aae86d32/original=true/121901125.jpeg");
            p13.setSafetensorsS3Key("public/loras/13/model.safetensors");
            productRepository.save(p13);

            Product p14 = new Product();
            p14.setName("Olena from Ukraine");
            p14.setDescription("Age 26 · 1.70m");
            p14.setBaseModel("SDXL 1.0");
            p14.setPriceCents(999);
            p14.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9bc01b12-88d9-4c4e-8605-8f3e7d9956f7/original=true/121790959.jpeg");
            p14.setSafetensorsS3Key("public/loras/14/model.safetensors");
            productRepository.save(p14);

            Product p15 = new Product();
            p15.setName("Zoya from Kazakhstan");
            p15.setDescription("Age 24 · 1.66m");
            p15.setBaseModel("SDXL 1.0");
            p15.setPriceCents(999);
            p15.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/11a1dc67-005b-44f8-bc5f-29781869c9be/original=true/121754777.jpeg");
            p15.setSafetensorsS3Key("public/loras/15/model.safetensors");
            productRepository.save(p15);

            Product p16 = new Product();
            p16.setName("Dalia from Mexico");
            p16.setDescription("Age 26 · 1.65m");
            p16.setBaseModel("SDXL 1.0");
            p16.setPriceCents(999);
            p16.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/fff8fdb3-0cbb-466d-81c7-c333830315a2/original=true/121647674.jpeg");
            p16.setSafetensorsS3Key("public/loras/16/model.safetensors");
            productRepository.save(p16);

            Product p17 = new Product();
            p17.setName("Anna from Poland");
            p17.setDescription("Age 27 · 1.70m");
            p17.setBaseModel("SDXL 1.0");
            p17.setPriceCents(999);
            p17.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f7a24fac-4cab-4327-8fff-35df4298a1cc/original=true/121616848.jpeg");
            p17.setSafetensorsS3Key("public/loras/17/model.safetensors");
            productRepository.save(p17);

            Product p18 = new Product();
            p18.setName("Nora from Norway");
            p18.setDescription("Age 25 · 1.72m");
            p18.setBaseModel("SDXL 1.0");
            p18.setPriceCents(999);
            p18.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/00d48c11-ee1b-405f-8fb9-03b996db0cbd/original=true/121442367.jpeg");
            p18.setSafetensorsS3Key("public/loras/18/model.safetensors");
            productRepository.save(p18);

            Product p19 = new Product();
            p19.setName("Tina from Croatia");
            p19.setDescription("Age 26 · 1.69m");
            p19.setBaseModel("SDXL 1.0");
            p19.setPriceCents(999);
            p19.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e7cd9cc3-2bc5-45a8-86f9-203a927b77b7/original=true/121299632.jpeg");
            p19.setSafetensorsS3Key("public/loras/19/model.safetensors");
            productRepository.save(p19);

            Product p20 = new Product();
            p20.setName("Aaju from Greenland");
            p20.setDescription("Age 24 · 1.60m");
            p20.setBaseModel("SDXL 1.0");
            p20.setPriceCents(999);
            p20.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5dcd07e4-f6e0-41c8-86ed-32b9951faa1e/original=true/120605584.jpeg");
            p20.setSafetensorsS3Key("public/loras/20/model.safetensors");
            productRepository.save(p20);

            Product p21 = new Product();
            p21.setName("Maria from Brazil");
            p21.setDescription("Age 28 · 1.68m");
            p21.setBaseModel("SDXL 1.0");
            p21.setPriceCents(999);
            p21.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a84e1a9f-18b6-42a1-99bd-3f814190a1e8/original=true/120577362.jpeg");
            p21.setSafetensorsS3Key("public/loras/21/model.safetensors");
            productRepository.save(p21);

            Product p22 = new Product();
            p22.setName("Anne from Denmark");
            p22.setDescription("Age 27 · 1.73m");
            p22.setBaseModel("SDXL 1.0");
            p22.setPriceCents(999);
            p22.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0868a068-67c5-4248-a37a-a93b03412f31/original=true/120144950.jpeg");
            p22.setSafetensorsS3Key("public/loras/22/model.safetensors");
            productRepository.save(p22);

            Product p23 = new Product();
            p23.setName("Milica from Serbia");
            p23.setDescription("Age 25 · 1.68m");
            p23.setBaseModel("SDXL 1.0");
            p23.setPriceCents(999);
            p23.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f93a7700-22dc-4689-81b8-3800c7784fd3/original=true/118668328.jpeg");
            p23.setSafetensorsS3Key("public/loras/23/model.safetensors");
            productRepository.save(p23);

            Product p24 = new Product();
            p24.setName("Amina from Morocco");
            p24.setDescription("Age 26 · 1.64m");
            p24.setBaseModel("SDXL 1.0");
            p24.setPriceCents(999);
            p24.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0d31c367-b752-433c-bf76-72edd4d4135a/original=true/118459690.jpeg");
            p24.setSafetensorsS3Key("public/loras/24/model.safetensors");
            productRepository.save(p24);

            Product p25 = new Product();
            p25.setName("Sheila from Nigeria");
            p25.setDescription("Age 27 · 1.66m");
            p25.setBaseModel("SDXL 1.0");
            p25.setPriceCents(999);
            p25.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1e0bc7f9-d9ac-42b5-9a8d-f23ed0264432/original=true/118376129.jpeg");
            p25.setSafetensorsS3Key("public/loras/25/model.safetensors");
            productRepository.save(p25);

            Product p26 = new Product();
            p26.setName("Stefi from Czech Republic");
            p26.setDescription("Age 24 · 1.70m");
            p26.setBaseModel("SDXL 1.0");
            p26.setPriceCents(999);
            p26.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6534e7cd-c4d0-4d09-bfa2-22a83ecb3e1a/original=true/118136063.jpeg");
            p26.setSafetensorsS3Key("public/loras/26/model.safetensors");
            productRepository.save(p26);

            Product p27 = new Product();
            p27.setName("Lara from Portugal");
            p27.setDescription("Age 26 · 1.67m");
            p27.setBaseModel("SDXL 1.0");
            p27.setPriceCents(999);
            p27.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d706b22c-5dcf-49c9-8be2-ed9289dab6df/original=true/117909238.jpeg");
            p27.setSafetensorsS3Key("public/loras/27/model.safetensors");
            productRepository.save(p27);

            Product p28 = new Product();
            p28.setName("Kasia from Poland");
            p28.setDescription("Age 25 · 1.69m");
            p28.setBaseModel("SDXL 1.0");
            p28.setPriceCents(999);
            p28.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e3e8305f-42b0-4fd6-a7c1-c3a3e0cba541/original=true/117742042.jpeg");
            p28.setSafetensorsS3Key("public/loras/28/model.safetensors");
            productRepository.save(p28);

            Product p29 = new Product();
            p29.setName("Svetlana from Bulgaria");
            p29.setDescription("Age 28 · 1.71m");
            p29.setBaseModel("SDXL 1.0");
            p29.setPriceCents(999);
            p29.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c060b0ae-6f46-4968-a61a-5565df48d27d/original=true/117559750.jpeg");
            p29.setSafetensorsS3Key("public/loras/29/model.safetensors");
            productRepository.save(p29);

            Product p30 = new Product();
            p30.setName("Sofia from Greece");
            p30.setDescription("Age 26 · 1.68m");
            p30.setBaseModel("SDXL 1.0");
            p30.setPriceCents(999);
            p30.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f9c3eb39-62e2-4967-878c-b7dc564aa667/original=true/117349603.jpeg");
            p30.setSafetensorsS3Key("public/loras/30/model.safetensors");
            productRepository.save(p30);

            Product p31 = new Product();
            p31.setName("Juanita from Argentina");
            p31.setDescription("Age 27 · 1.66m");
            p31.setBaseModel("SDXL 1.0");
            p31.setPriceCents(999);
            p31.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/acfa2396-fea3-4d2f-a518-88695142e05d/original=true/117244562.jpeg");
            p31.setSafetensorsS3Key("public/loras/31/model.safetensors");
            productRepository.save(p31);

            Product p32 = new Product();
            p32.setName("Giulia from Italy");
            p32.setDescription("Age 25 · 1.70m");
            p32.setBaseModel("SDXL 1.0");
            p32.setPriceCents(999);
            p32.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/38e333fc-c818-4625-8239-0d1353dd9065/original=true/117088163.jpeg");
            p32.setSafetensorsS3Key("public/loras/32/model.safetensors");
            productRepository.save(p32);

            Product p33 = new Product();
            p33.setName("Fiona from Scotland");
            p33.setDescription("Age 26 · 1.72m");
            p33.setBaseModel("SDXL 1.0");
            p33.setPriceCents(999);
            p33.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1e86c00c-0d9e-4ba3-a433-22dbfcda3c27/original=true/116977697.jpeg");
            p33.setSafetensorsS3Key("public/loras/33/model.safetensors");
            productRepository.save(p33);

            Product p34 = new Product();
            p34.setName("Helga from Germany");
            p34.setDescription("Age 29 · 1.74m");
            p34.setBaseModel("SDXL 1.0");
            p34.setPriceCents(999);
            p34.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2947e803-e17e-401b-9e98-5f02b76cb9c6/original=true/116522817.jpeg");
            p34.setSafetensorsS3Key("public/loras/34/model.safetensors");
            productRepository.save(p34);

            Product p35 = new Product();
            p35.setName("Hana from Japan");
            p35.setDescription("Age 24 · 1.60m");
            p35.setBaseModel("SDXL 1.0");
            p35.setPriceCents(999);
            p35.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/04985357-7056-45d9-ad3a-fab7655f9571/original=true/116512221.jpeg");
            p35.setSafetensorsS3Key("public/loras/35/model.safetensors");
            productRepository.save(p35);

            Product p36 = new Product();
            p36.setName("Inga from Finland");
            p36.setDescription("Age 27 · 1.73m");
            p36.setBaseModel("SDXL 1.0");
            p36.setPriceCents(999);
            p36.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/82b7a3af-3bca-4ded-887b-d35c41c99875/original=true/116511750.jpeg");
            p36.setSafetensorsS3Key("public/loras/36/model.safetensors");
            productRepository.save(p36);

            Product p37 = new Product();
            p37.setName("Mariam from Georgia");
            p37.setDescription("Age 25 · 1.65m");
            p37.setBaseModel("SDXL 1.0");
            p37.setPriceCents(999);
            p37.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/207cca0d-3260-4156-aa45-4b0e53b34a0d/original=true/116512422.jpeg");
            p37.setSafetensorsS3Key("public/loras/37/model.safetensors");
            productRepository.save(p37);

            Product p38 = new Product();
            p38.setName("Chen from China");
            p38.setDescription("Age 26 · 1.62m");
            p38.setBaseModel("SDXL 1.0");
            p38.setPriceCents(999);
            p38.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/bb6144f1-7e4a-43fe-beb5-7b24210d20fd/original=true/116501408.jpeg");
            p38.setSafetensorsS3Key("public/loras/38/model.safetensors");
            productRepository.save(p38);

            Product p39 = new Product();
            p39.setName("Anastasia from Russia");
            p39.setDescription("Age 25 · 1.71m");
            p39.setBaseModel("SDXL 1.0");
            p39.setPriceCents(999);
            p39.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7d0d345c-51fa-4f31-ac18-0f56625fc53d/original=true/116509365.jpeg");
            p39.setSafetensorsS3Key("public/loras/39/model.safetensors");
            productRepository.save(p39);

            Product p40 = new Product();
            p40.setName("Allison from USA");
            p40.setDescription("Age 28 · 1.69m");
            p40.setBaseModel("SDXL 1.0");
            p40.setPriceCents(999);
            p40.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/23f5df57-ce04-4cbb-9fcd-4cc24b705abd/original=true/116501622.jpeg");
            p40.setSafetensorsS3Key("public/loras/40/model.safetensors");
            productRepository.save(p40);

            Product p41 = new Product();
            p41.setName("Rabab from Egypt");
            p41.setDescription("Age 26 · 1.64m");
            p41.setBaseModel("SDXL 1.0");
            p41.setPriceCents(999);
            p41.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/33fb3301-ec2f-4a8f-8915-c198d074efd1/original=true/116499426.jpeg");
            p41.setSafetensorsS3Key("public/loras/41/model.safetensors");
            productRepository.save(p41);

            Product p42 = new Product();
            p42.setName("Iuliia from Ukraine");
            p42.setDescription("Age 27 · 1.70m");
            p42.setBaseModel("SDXL 1.0");
            p42.setPriceCents(999);
            p42.setImageUrl("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c8d61866-d952-453e-819b-f4deb82acc9f/original=true/116500925.jpeg");
            p42.setSafetensorsS3Key("public/loras/42/model.safetensors");
            productRepository.save(p42);

            System.out.println("Seeded database with 42 LoRAs.");
        }
    }
}
