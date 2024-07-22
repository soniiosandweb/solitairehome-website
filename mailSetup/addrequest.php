<?php
require 'vendor/autoload.php';

date_default_timezone_set('Asia/Kolkata');
define('ElasticEmail_API_KEY', 'BA78AF23C96F65E43FA6119A7398C1F140FE331196273346BA6097CBF15A78C2BBE83E2337D66365B095933A0D994E4C');
define('GOOGLE_SPREADSHEET_ID', '1RJmjLR1ILxubCCBUxEBtUiU0PQNFd1nb4ril4E0Vy5k');

$to = "solitairehomeconsultant@gmail.com";
$from = "solitairehomeconsultant@gmail.com";
$name = $_GET['name']?$_GET['name']:"";
$email = $_GET['email']?$_GET['email']:"";
$mobile = $_GET['mobile']?$_GET['mobile']:"";
// $subject = $_GET['subject']?$_GET['subject']:"Fullname: $name";
$subject = "HEY!!! YOU GOT A LEAD";
$href = $_GET['href']?$_GET['href']:"";
$body = ($_GET['body']?$_GET['body']:"");
$time = date( 'd-m-Y h:i:s A', time () );
$emailContent = "Hey Team,
<br />
<br />
Someone wants to connect with you and you can reach out to them with the following details :
<br />
Name : $name<br />
Phone : $mobile<br />
Email : $email<br />
ctaName : $body<br />
Request From Page : $href<br />
Time : $time
<br />
<br />
Thanks!!";

$config = ElasticEmail\Configuration::getDefaultConfiguration()->setApiKey('X-ElasticEmail-ApiKey', ElasticEmail_API_KEY);

$apiInstance = new ElasticEmail\Api\EmailsApi(
    new GuzzleHttp\Client(),
    $config
);

$email_message_data = new \ElasticEmail\Model\EmailTransactionalMessageData([
	"recipients" => new \ElasticEmail\Model\TransactionalRecipient([
		"to" => [$to],
		// "to" => ["email@domain.com, email2@domain.com, email3@domain.com"],
		// "cc" => ["email4@domain.com, email5@domain.com"],
		"bcc" => ["raghav0493@gmail.com"]
	]),
	"content" => new \ElasticEmail\Model\EmailContent([
		"body" => [new \ElasticEmail\Model\BodyPart([
				"content_type" => "HTML",
				"content" => $emailContent
			])
		],
		"from" => $from,
		"subject" => $subject,
	]),
	// "options" => new \ElasticEmail\Model\Options([
	//	"channel_name" => "My Channel"
	// ])
]);
 
 
try {
	$response = $apiInstance->emailsTransactionalPost($email_message_data);
} catch (Exception $e) {
    echo 'Exception when calling EE API: ', $e->getMessage(), PHP_EOL;
}
print_r($response);
exit;


use Google\Spreadsheet\DefaultServiceRequest;
use Google\Spreadsheet\ServiceRequestFactory;

// Load credentials from JSON file
putenv('GOOGLE_APPLICATION_CREDENTIALS=./solitairehome-14d95011393b.json');
// Initialize Google Sheets service
$client = new Google_Client();
$client->useApplicationDefaultCredentials();
$client->setApplicationName("sheetapi");
$client->setScopes(['https://www.googleapis.com/auth/spreadsheets']);

// Get the Google Sheets service
$service = new Google_Service_Sheets($client);

// Example: Update a cell in the Google Sheet
$spreadsheetId = GOOGLE_SPREADSHEET_ID;
// $range = 'Sheet1!A2:F500';
$range = 'Sheet1';
$values = [
    [
      $name, $email, $mobile, $subject, $body.$href,date( 'd-m-Y h:i:s A', time () )
    ]
];
$body = new Google_Service_Sheets_ValueRange([
    'values' => $values
]);
$params = [
    'valueInputOption' => 'RAW'
];
$result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);
echo "Record Updated";exit;
// printf("Updated %d cells.", $result->getUpdatedCells());
// echo "<pre>";print_r($result); echo json_encode($result);