def find_depth(right_point, left_point, frame_right, frame_left, baseline,f, alpha):

    # # CONVERT FOCAL LENGTH f FROM [mm] TO [pixel]:
    # height_right, width_right, depth_right = frame_right.shape
    # height_left, width_left, depth_left = frame_left.shape

    # # if width_right == width_left:
    # #     f_pixel = (width_right * 0.5) / np.tan(alpha * 0.5 * np.pi/180)

    # # else:
    # #     print('Left and right camera frames do not have the same pixel width')
    # 
    # f_pixel is the focal length of the edge deive in pixels
    # right/left_point is the centre of bounding box of the detected drone
    # baseline is the distance between the two cameras
    # alpha is the field of view in degrees
    # frame_right/left is the frame from the respective cameras
    f_pixel = 1440
    print(f_pixel)

    x_right = right_point[0]
    x_left = left_point[0]

    # CALCULATE THE DISPARITY:
    disparity = x_left-x_right      #Displacement between left and right frames [pixels]

    # CALCULATE DEPTH z:
    zDepth = (baseline*f_pixel)/disparity             #Depth in [cm]

    return zDepth