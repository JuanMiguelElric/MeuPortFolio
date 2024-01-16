<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class PHPmaillerController extends Controller
{
    public function email(){
        return view("email");
    }
    public function composeEmail(Request $request){
        require base_path("vendor/autoload.php");
        $mail = new PHPMailer(true);

        try {
            $mail = new PHPMailer(true);

            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->Host = "smtp.example.com";
            $mail->SMTPAuth = true;
            $mail->Username = "user@example.com";
            $mail->Password = "*******";
            $mail->SMTPSecure = "tls";
            $mail->Port = 587;
            $mail->setFrom("oliveirajuan243@gmail.com", "juan");
            $mail->addAddress($request->emailRecipiente);
            $mail->addCC($request->emailCc);
            $mail->addBCC($request->emailBcc); // Corrigi o typo: era abbBCC, corrigido para addBCC
            $mail->addReplyTo("oliveirajuan243@gmail.com", "Juan");

            if (isset($_FILES['emailAttachments'])) {
                for ($i = 0; $i < count($_FILES['emailAttachments']['tmp_name']); $i++) {
                    $mail->addAttachment($_FILES['emailAttachments']['tmp_name'][$i], $_FILES['emailAttachments']['name'][$i]); // Corrigi o typo: era ['name'[$i], corrigido para ['name'][$i]
                }
            }

            $mail->isHTML(true);
            $mail->Subject = $request->emailSubject;

            if (!$mail->send()) {
                return back()->with("failed", "Email não enviado");
            } else {
                return back()->with("success", "Email enviado");
            }
        } catch (Exception $e) {
            return back()->with("error", "Erro na mensagem: " . $e->getMessage());
        }
    }
}
