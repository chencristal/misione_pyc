<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

        $this->load->model('GlobalModel', 'gm');
    }

    /**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

    public function m3()
    {
        $user_id = 'user';

        $rand = array();
        $rand[0] = 2;
        for ($i=1;$i<16;$i++) {
            $rand[$i] = rand(0,2);
            if ($i != 0 && $rand[$i-1] != 0 && $rand[$i] != $rand[$i-1])
                $rand[$i] = 0;
        }

        $data = array(
            'title' => 'Mision 3',
            'name' => 'm3',
            'nombre' => 'Chen',
            'route' => $rand
        );
        $this->load->view('partial/header.php', $data);
        $this->load->view('m3.php');
        $this->load->view('partial/footer.php');
    }

    public function m3_save_mission()
    {
        $ret = array('result' => 'success');

        $user_id = 'user';
        $first = $this->input->post('first');
        $second = $this->input->post('second');

        $this->gm->save_mission_3($user_id, $first, $second);

        echo json_encode($ret);
    }

    public function m3_save_mission_route() {
        $ret = array('result' => 'success');

        $user_id = 'user';
        $correct_route = $this->input->post('correct_route');

        $this->gm->save_mission_3_route($user_id, $correct_route);

        echo json_encode($ret);
    }

    public function m5()
    {
        $user_id = 'user';
        $filename = $this->gm->get_upload($user_id);
        $title = $this->gm->get_m5_title($user_id);
        $subtitle = $this->gm->get_m5_subtitle($user_id);
        $content = $this->gm->get_m5_content($user_id);

        $data = array(
            'title' => 'Mision 5',
            'name' => 'm5',
            'nombre' => 'Chen',
            'filename' => $filename,
            'maintitle' => $title,
            'subtitle' => $subtitle,
            'content' => $content
        );
        $this->load->view('partial/header.php', $data);
        $this->load->view('m5.php', $data);
        $this->load->view('partial/footer.php');
    }


    public function m5_change_title() {
        $user_id = 'user';
        $ret = array('result' => 'success');

        $title = $this->input->post('value');

        $this->gm->save_m5_title($user_id, $title);

        echo json_encode($ret);
    }
    public function m5_change_subtitle() {
        $user_id = 'user';
        $ret = array('result' => 'success');

        $subtitle = $this->input->post('value');

        $this->gm->save_m5_subtitle($user_id, $subtitle);

        echo json_encode($ret);
    }
    public function m5_change_content() {
        $user_id = 'user';
        $ret = array('result' => 'success');

        $content = $this->input->post('value');
        $this->gm->save_m5_content($user_id, $content);

        echo json_encode($ret);
    }
    public function m5_upload() {
        $user_id = 'user';

        $ret = array('result' => 'success');

        $upload_dir = './uploads/';
        if (!file_exists($upload_dir)) mkdir($upload_dir);
        $file = $_FILES['image'];

        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $name = pathinfo($file['name'], PATHINFO_FILENAME);
        $filename = md5($name.time()).".".$ext;

        if (move_uploaded_file($file['tmp_name'], $upload_dir.$filename)) {
            $ret['file'] = base_url($upload_dir.$filename);

            $this->gm->save_upload($user_id, $upload_dir.$filename);
        }
        else {
            $ret['result'] = 'failed';
        }

        echo json_encode($ret);
    }

    public function terminar_memoria() {
        $ret = array('result' => 'success');

        $user_id = 'user';
        $memoria_id = $this->input->post('memoria_id');
        $mision_id = $this->input->post('mision_id');
        $respuesta = $this->input->post('respuesta');

        $this->gm->save_memo($user_id, $respuesta, $mision_id, $memoria_id);

        echo json_encode($ret);
    }


    public function m8()
    {
        $data = array(
            'title' => 'Mision 8',
            'name' => 'm8',
            'nombre' => 'Chen'
        );
        $this->load->view('partial/header.php', $data);
        $this->load->view('m8.php');
        $this->load->view('partial/footer.php');
    }

    public function m8_save_mission()
    {
        $ret = array('result' => 'success');

        $user_id = 'user';
        $first = $this->input->post('first');
        $second = $this->input->post('second');
        $third = $this->input->post('third');
        $comment = $this->input->post('comment');

        $this->gm->save_mission_8($user_id, $first, $second, $third, $comment);

        echo json_encode($ret);
    }

    public function m9()
    {
        $data = array(
            'title' => 'Mision 9',
            'name' => 'm9',
            'nombre' => 'Chen'
        );
        $this->load->view('partial/header.php', $data);
        $this->load->view('m9.php');
        $this->load->view('partial/footer.php');
    }
}

