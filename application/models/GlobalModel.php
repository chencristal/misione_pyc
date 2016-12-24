<?php

/**
 * Created by PhpStorm.
 * User: Chen
 * Date: 11/22/2016
 * Time: 9:21 PM
 */
class GlobalModel extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function save_memo($user_id, $respuesta, $mision_id, $memoria_id) {
        $data = array(
            'usuario_id' => $user_id,
            'mision_id' => $mision_id,
            'respuesta' => $respuesta
        );
        $this->db->insert('memorias', $data);

        return true;
    }

    public function save_mission_3_route($user_id, $correct_route) {

        $this->db->where('usuario_id', $user_id);
        $this->db->from('resultados_mision_3');
        $count = $this->db->count_all_results();
        if ($count > 0) {
            $this->db->where('usuario_id', $user_id);
            $this->db->set('correct_route', $correct_route);
            $this->db->update('resultados_mision_3');
        } else {
            $data = array(
                'usuario_id' => $user_id,
                'correct_route' => $correct_route
            );
            $this->db->insert('resultados_mision_3', $data);
        }
        return true;
    }

    public function save_mission_3($user_id, $first, $second) {

        $this->db->where('usuario_id', $user_id);
        $this->db->from('resultados_mision_3');
        $count = $this->db->count_all_results();
        if ($count > 0) {
            $this->db->where('usuario_id', $user_id);
            $this->db->set('first', $first);
            $this->db->set('second', $second);
            $this->db->update('resultados_mision_3');
        } else {
            $data = array(
                'usuario_id' => $user_id,
                'first' => $first,
                'second' => $second
            );
            $this->db->insert('resultados_mision_3', $data);
        }

        return true;

        return true;
    }

    public function save_mission_8($user_id, $first, $second, $third, $comment) {
        $data = array(
            'usuario_id' => $user_id,
            'first' => $first,
            'second' => $second,
            'third' => $third,
            'comment' => $comment
        );
        $this->db->insert('resultados_mision_8', $data);

        return true;
    }

    public function save_upload($user_id, $file) {
        $this->db->where('user_id', $user_id);
        $this->db->from('mision_5_upload');
        $count = $this->db->count_all_results();
        if ($count > 0) {
            $this->db->where('user_id', $user_id);
            $this->db->set('filename', $file);
            $this->db->update('mision_5_upload');
        } else {
            $data = array(
                'user_id' => $user_id,
                'filename' => $file
            );
            $this->db->insert('mision_5_upload', $data);
        }

        return true;
    }

    public function get_upload($user_id) {
        $filename = 'assets/img/upload_1.png';
        $result = $this->db->select('filename')
            ->where('user_id', $user_id)
            ->get('mision_5_upload')
            ->result_array();

        if (count($result) > 0 && $result[0]['filename'] != "")
            $filename = $result[0]['filename'];
        return $filename;
    }

    public function save_m5_title($user_id, $title) {
        $this->db->where('user_id', $user_id);
        $this->db->from('mision_5_upload');
        $count = $this->db->count_all_results();
        if ($count > 0) {
            $this->db->where('user_id', $user_id);
            $this->db->set('title', $title);
            $this->db->update('mision_5_upload');
        } else {
            $data = array(
                'user_id' => $user_id,
                'title' => $title
            );
            $this->db->insert('mision_5_upload', $data);
        }

        return true;
    }
    public function get_m5_title($user_id) {
        $title = 'Add New Title Here';
        $result = $this->db->select('title')
            ->where('user_id', $user_id)
            ->get('mision_5_upload')
            ->result_array();

        if (count($result) > 0 && $result[0]['title'] != "")
            $title = $result[0]['title'];
        return $title;
    }

    public function save_m5_content($user_id, $content) {
        $this->db->where('user_id', $user_id);
        $this->db->from('mision_5_upload');
        $count = $this->db->count_all_results();
        if ($count > 0) {
            $this->db->where('user_id', $user_id);
            $this->db->set('content', $content);
            $this->db->update('mision_5_upload');
        } else {
            $data = array(
                'user_id' => $user_id,
                'content' => $content
            );
            $this->db->insert('mision_5_upload', $data);
        }

        return true;
    }
    public function get_m5_content($user_id) {
        $content = 'Add New Content Here';
        $result = $this->db->select('content')
            ->where('user_id', $user_id)
            ->get('mision_5_upload')
            ->result_array();

        if (count($result) > 0 && $result[0]['content'] != "")
            $content = $result[0]['content'];
        return $content;
    }

    public function save_m5_subtitle($user_id, $subtitle) {
        $this->db->where('user_id', $user_id);
        $this->db->from('mision_5_upload');
        $count = $this->db->count_all_results();
        if ($count > 0) {
            $this->db->where('user_id', $user_id);
            $this->db->set('subtitle', $subtitle);
            $this->db->update('mision_5_upload');
        } else {
            $data = array(
                'user_id' => $user_id,
                'subtitle' => $subtitle
            );
            $this->db->insert('mision_5_upload', $data);
        }

        return true;
    }
    public function get_m5_subtitle($user_id) {
        $subtitle = 'Add New Subtitle Here';
        $result = $this->db->select('subtitle')
            ->where('user_id', $user_id)
            ->get('mision_5_upload')
            ->result_array();

        if (count($result) > 0 && $result[0]['subtitle'] != "")
            $subtitle = $result[0]['subtitle'];
        return $subtitle;
    }
}