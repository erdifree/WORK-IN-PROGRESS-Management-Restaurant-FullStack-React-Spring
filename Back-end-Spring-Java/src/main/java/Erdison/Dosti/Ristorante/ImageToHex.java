package Erdison.Dosti.Ristorante;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.nio.file.Files;
import javax.imageio.ImageIO;
import javax.xml.bind.DatatypeConverter;

public class ImageToHex {
    public static void main(String[] args) throws Exception {
        // Percorso del file immagine
        File file = new File("image/Homepageristorant.jpg");

        // Leggi l'immagine dal file
        BufferedImage image = ImageIO.read(file);

        // Converti l'immagine in un array di byte
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "jpg", baos);
        byte[] bytes = baos.toByteArray();

        // Converti l'array di byte in una stringa esadecimale
        String hex = DatatypeConverter.printHexBinary(bytes);

        // Stampa la stringa esadecimale
        System.out.println(hex);
    }
    }

