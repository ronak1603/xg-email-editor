"use client";
import React, { useCallback, useMemo } from 'react';

// import { useAppSelector } from 'easy-email/demo/src/hooks/useAppSelector';
// import { useLoading } from '../hooks/useLoading';
import {
  Button,
  ConfigProvider,
  Message,
  PageHeader,
} from '@arco-design/web-react';
// import { useHistory } from 'react-router-dom';
import { cloneDeep, set, isEqual, get } from 'lodash';
// import { Loading } from '../components/loading';
// import services from 'easy-email/demo/src/services';
import {
  EmailEditor,
  EmailEditorProvider,
  EmailEditorProviderProps,
  IEmailTemplate,
} from 'easy-email-editor';

import { Stack } from '../components/Stack';
// import { pushEvent } from 'easy-email/demo/src/utils/pushEvent';
// import { FormApi } from 'final-form';

// import { useCollection } from 'easy-email/demo/src/pages/Editor/components/useCollection';
// import { IBlockData } from 'easy-email-core';
import {
  // BlockMarketManager,
  ExtensionProps,
  StandardLayout,
} from 'easy-email-extensions';

import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
// import { testMergeTags } from 'easy-email/demo/src/pages/Editor/testMergeTags';
// import { useMergeTagsModal } from 'easy-email/demo/src/pages/Editor/components/useMergeTagsModal';

import { useWindowSize } from 'react-use';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { IconSave } from '@arco-design/web-react/icon';
import { Liquid } from 'liquidjs';
// import { Loader } from 'liquidjs/dist/src/fs';
// import component from 'easy-email/demo/src/store/component';
// import templateList from 'easy-email/demo/src/store/templateList';


const imageCompression = import('browser-image-compression');

export default function Editor() {
  const defaultCategories: ExtensionProps['categories'] = [
    {
      label: 'Content',
      active: true,
      blocks: [
        // {
        //   type: CustomBlocksType.TOPBAR_3,
        // },
        // {
        //   type: CustomBlocksType.TOPBAR_4,
        // },
        // {
        //   type: CustomBlocksType.TOPBAR_5,
        // },
        // {
        //   type: CustomBlocksType.TOPBAR_6,
        // }
      ],
    }
  ];

  const changeCategories = (category: string) => {
    console.log("category")
  };

  // const history = useHistory();
  const templates = [
    {
      "content": {
        "data": {
          "value": {
            "fonts": [],
            "font-size": "14px",
            "breakpoint": "480px",
            "headStyles": [],
            "responsive": true,
            "text-color": "#000000",
            "font-family": "lucida Grande,Verdana,Microsoft YaHei",
            "line-height": "1.7",
            "headAttributes": ""
          }
        },
        "type": "page",
        "children": [
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/b999e7e4-9242-4435-a4f6-c8f1d6fdfd96-image.png",
                      "align": "center",
                      "width": "214px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "10px 25px 10px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"text-align: center; margin: 10px 0;color:#151e23;font-size:14px;font-family:Georgia,Helvetica,Arial,sans-serif\">Product | Concept | Contact</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "0px 25px 15px 25px",
                      "font-size": "13px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "30px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/ed0590da-b6dc-4d14-bfc7-6f1931a390fd-image.png",
                      "align": "center",
                      "width": "600px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "0px 0px 0px 0px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"line-height: 30px; margin: 10px 0; text-align: center; color:#151e23; font-size:30p; font-family:Georgia,Helvetica,Arial,sans-serif\">- Our Holiday Recipes -</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "30px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "30px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/be61d137-bb44-4358-a681-dea81d2a8ec1-image.png",
                      "align": "center",
                      "width": "1200px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "0px 30px 20px 30px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif\"><b>Cake Title</b></p>\n          <p style=\"line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style=\"line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif\"><u>Choose me</u> &gt;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "0px 40px 0px 40px",
                      "font-size": "13px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/b3e16b18-9385-421e-b6a7-b28a749d6abf-image.png",
                      "align": "center",
                      "width": "1200px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "20px 30px 20px 30px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif\"><b>Cake Title</b></p>\n          <p style=\"line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style=\"line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif\"><u>Choose me</u> &gt;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "0px 40px 0px 40px",
                      "font-size": "13px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "rtl",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/6c23a5d0-ec6c-4634-8753-49e4a2da407e-image.png",
                      "align": "center",
                      "width": "1200px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "20px 30px 20px 30px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif\"><b>Cake Title</b></p>\n          <p style=\"line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style=\"line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif\"><u>Choose me</u> &gt;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "0px 40px 0px 40px",
                      "font-size": "13px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "Discover all desserts"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "#",
                      "align": "center",
                      "color": "#ffffff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "14px",
                      "text-align": "center",
                      "font-family": "Georgia, Helvetica, Arial, sans-serif",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "text-transform": "none",
                      "vertical-align": "middle",
                      "text-decoration": "none",
                      "background-color": "#354552"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/0a270377-104e-4ea8-bd94-3df6d7afaa01-image.png",
                      "align": "center",
                      "width": "600px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "0px 0px 0px 0px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/a35965f4-900a-43a5-9c96-cef1e398e9c5-image.png",
                      "align": "center",
                      "width": "202px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "10px 25px 10px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "elements": [
                          {
                            "src": "https://assets.maocanhua.cn/93013b18-062d-48d7-ae00-4a5f0a9ac988.png",
                            "href": "",
                            "name": "facebook",
                            "color": "#333333",
                            "target": "_blank",
                            "content": "Facebook",
                            "font-size": "13px",
                            "icon-size": "20px",
                            "line-height": "22px",
                            "text-padding": "4px 4px 4px 0",
                            "vertical-align": "middle",
                            "text-decoration": "none"
                          },
                          {
                            "src": "https://assets.maocanhua.cn/a81ddd4b-3a12-47be-91f3-28d71eced397.png",
                            "href": "",
                            "name": "pinterest",
                            "color": "#333333",
                            "target": "_blank",
                            "content": "Google",
                            "font-size": "13px",
                            "icon-size": "20px",
                            "line-height": "22px",
                            "text-padding": "4px 4px 4px 0",
                            "vertical-align": "middle",
                            "text-decoration": "none"
                          },
                          {
                            "src": "https://assets.maocanhua.cn/0a411326-17c5-4814-ad3a-6927266f097e.png",
                            "href": "",
                            "name": "instagram",
                            "color": "#333333",
                            "target": "_blank",
                            "content": "Twitter",
                            "font-size": "13px",
                            "icon-size": "20px",
                            "line-height": "22px",
                            "text-padding": "4px 4px 4px 0",
                            "vertical-align": "middle",
                            "text-decoration": "none"
                          }
                        ]
                      }
                    },
                    "type": "social",
                    "children": [],
                    "attributes": {
                      "mode": "horizontal",
                      "align": "center",
                      "color": "#333333",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "13px",
                      "icon-size": "20px",
                      "font-weight": "normal",
                      "line-height": "22px",
                      "icon-padding": "0px",
                      "text-padding": "4px 4px 4px 0px",
                      "border-radius": "3px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          }
        ],
        "attributes": {
          "width": "600px",
          "css-class": "mjml-body",
          "background-color": "#F4F4F4"
        }
      },
      "subject": "Welcome to Easy-email",
      "subTitle": "Welcome to Easy-email"
    },
    {
      "content": {
        "data": {
          "value": {
            "fonts": [],
            "font-size": "14px",
            "breakpoint": "480px",
            "headStyles": [],
            "responsive": true,
            "text-color": "#000000",
            "font-family": "lucida Grande,Verdana,Microsoft YaHei",
            "line-height": "1.7",
            "headAttributes": ""
          }
        },
        "type": "page",
        "children": [
          {
            "data": {
              "value": {
                "content": "<!-- Header -->"
              }
            },
            "type": "raw",
            "children": [],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "advanced_section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "advanced_image",
                    "children": [],
                    "attributes": {
                      "src": "https://avatars0.githubusercontent.com/u/16115896?v=3&s=200",
                      "align": "center",
                      "width": "50px",
                      "height": "auto",
                      "padding": "10px 25px 10px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "advanced_divider",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "padding": "10px 0px 0px 0px",
                      "border-color": "#f8f8f8",
                      "border-style": "solid",
                      "border-width": "1px",
                      "vertical-spacing": "0",
                      "horizontal-spacing": "0"
                    }
                  }
                ],
                "attributes": {
                  "width": "100%",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "white",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "advanced_section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "Here is what you've missed"
                      }
                    },
                    "type": "advanced_text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "grey",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "20px",
                      "font-family": "Helvetica Neue",
                      "font-weight": "200"
                    }
                  },
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "advanced_divider",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "padding": "10px 0px 0px 0px",
                      "border-color": "#f8f8f8",
                      "border-style": "solid",
                      "border-width": "1px",
                      "vertical-spacing": "0",
                      "horizontal-spacing": "0"
                    }
                  }
                ],
                "attributes": {
                  "width": "100%",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fcfcfc",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "content": "<!-- Article -->"
              }
            },
            "type": "raw",
            "children": [],
            "attributes": {}
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "advanced_section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "advanced_image",
                    "children": [],
                    "attributes": {
                      "src": "https://mjml.io/assets/img/responsive.png",
                      "align": "center",
                      "width": "100px",
                      "height": "auto",
                      "padding": "10px 25px 10px 25px"
                    }
                  }
                ],
                "attributes": {
                  "width": "130px",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "Sed ut perspiciatis"
                      }
                    },
                    "type": "advanced_text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "grey",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "20px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                      }
                    },
                    "type": "advanced_text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "grey",
                      "padding": "10px 25px 10px 25px"
                    }
                  }
                ],
                "attributes": {
                  "width": "350px",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "white",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "content": "<!-- Editor -->"
              }
            },
            "type": "raw",
            "children": [],
            "attributes": {}
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "advanced_section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "Explore our new features"
                      }
                    },
                    "type": "advanced_text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "rgb(165, 176, 184)",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "20px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#f3f3f3",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "advanced_section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "advanced_image",
                    "children": [],
                    "attributes": {
                      "src": "https://cloud.githubusercontent.com/assets/6558790/12450760/ee034178-bf85-11e5-9dda-98d0c8f9f8d6.png",
                      "align": "center",
                      "height": "auto",
                      "padding": "10px 25px 10px 25px"
                    }
                  }
                ],
                "attributes": {
                  "width": "100%",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#f3f3f3",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "advanced_section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "advanced_image",
                    "children": [],
                    "attributes": {
                      "src": "https://mjml.io/assets/img/easy-and-quick.png",
                      "align": "center",
                      "width": "100px",
                      "height": "auto",
                      "padding": "10px 25px 10px 25px"
                    }
                  }
                ],
                "attributes": {
                  "width": "130px",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "Right on time!"
                      }
                    },
                    "type": "advanced_text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "grey",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "20px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                      }
                    },
                    "type": "advanced_text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "grey",
                      "padding": "10px 25px 10px 25px"
                    }
                  }
                ],
                "attributes": {
                  "width": "350px",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fcfcfc",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "advanced_section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "advanced_column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "Stay in touch!"
                      }
                    },
                    "type": "advanced_text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "padding": "10px 25px 10px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "elements": [
                          {
                            "src": "https://easy-email-m-ryan.vercel.app/images/acbae5eb-efa4-4eb6-866c-f421e740b713-ad3c92b1-9cdb-4a7b-aad3-75ad809db8a3.png",
                            "href": "#",
                            "name": "twitter",
                            "target": "_blank",
                            "content": "Facebook",
                            "icon-size": "20px"
                          },
                          {
                            "src": "https://easy-email-m-ryan.vercel.app/images/98520d6c-5cef-449e-bcbf-6316ccec2088-e8780361-0deb-4896-895e-e690c886cdf0.png",
                            "href": "#",
                            "name": "facebook",
                            "target": "_blank",
                            "content": "Google",
                            "icon-size": "20px"
                          },
                          {
                            "src": "https://easy-email-m-ryan.vercel.app/images/b064f705-34ba-4400-975e-9dd0cec21c30-cc9aa158-56bd-4bf1-b532-72390d25c864.png",
                            "href": "",
                            "target": "_blank",
                            "content": "Twitter",
                            "icon-size": "20px"
                          }
                        ]
                      }
                    },
                    "type": "advanced_social",
                    "children": [],
                    "attributes": {
                      "mode": "horizontal",
                      "align": "center",
                      "color": "#333333",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "13px",
                      "icon-size": "20px",
                      "font-weight": "normal",
                      "line-height": "22px",
                      "icon-padding": "0px",
                      "text-padding": "4px 4px 4px 0px",
                      "border-radius": "3px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#f3f3f3",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          }
        ],
        "attributes": {
          "width": "600px",
          "background-color": "#E1E8ED"
        }
      },
      "subject": "MJML Code - Newsletter",
      "subTitle": "MJML Code - Newsletter"
    },
    {
      "content": {
        "data": {
          "value": {
            "fonts": [],
            "font-size": "14px",
            "breakpoint": "480px",
            "headStyles": [],
            "responsive": true,
            "text-color": "#000000",
            "font-family": "lucida Grande,Verdana,Microsoft YaHei",
            "line-height": "1.7",
            "headAttributes": ""
          }
        },
        "type": "page",
        "children": [
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Racoon logo",
                      "src": "http://191n.mj.am/img/191n/3s/x4u.png",
                      "href": "https://mjml.io",
                      "align": "center",
                      "height": "auto",
                      "padding": "10px 10px 10px 10px"
                    }
                  }
                ],
                "attributes": {
                  "width": "50%",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"font-size: 17px;\">SPRING PROMO</p>\n          <p>50%</p>\n          <p>OFFER</p>\n          <p style=\"font-size: 13px\">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br /></p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#fff",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "40px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "SHOP NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fa8739",
                      "border": "none",
                      "target": "_blank",
                      "padding": "15px 25px 40px 25px",
                      "font-size": "16px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "inner-padding": "10px 25px 10px 25px",
                      "vertical-align": "middle",
                      "background-color": "#fff"
                    }
                  }
                ],
                "attributes": {
                  "width": "200px",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Clothes set",
                      "src": "https://assets.maocanhua.cn/57b75a82-e8df-4281-9590-fb9487466d6e-image.png",
                      "align": "center",
                      "width": "400px",
                      "border": "none",
                      "height": "auto",
                      "padding": "0px 0px 0px 0px"
                    }
                  }
                ],
                "attributes": {
                  "width": "400px",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fa8739",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Box free shipping",
                      "src": "http://191n.mj.am/img/191n/3s/x4t.png",
                      "align": "center",
                      "width": "42px",
                      "border": "none",
                      "height": "auto",
                      "padding": "10px 0px 10px 0px"
                    }
                  }
                ],
                "attributes": {
                  "width": "25%",
                  "border": "none",
                  "padding": "10px 0px 10px 0px",
                  "vertical-align": "middle"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p>FREE SHIPPING ON ORDER <span style=\"font-weight: bold;color: rgb(250, 135, 57);\">OVER 55&#x20AC;</span></p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#fff",
                      "padding": "0px 25px 10px 25px",
                      "font-size": "18px"
                    }
                  }
                ],
                "attributes": {
                  "width": "75%",
                  "border": "none",
                  "padding": "10px 0px 10px 0px",
                  "vertical-align": "middle"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#2f323b",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {},
                  "hidden": false
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Chesterk tank",
                      "src": "http://191n.mj.am/img/191n/3s/x4v.jpg",
                      "align": "center",
                      "width": "209px",
                      "border": "none",
                      "height": "auto",
                      "padding": "30px 0px 20px 0px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p>CHESTERK TANK</p>\n          <p style=\"color: rgb(250, 135, 57);\">15&#x20AC;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#000",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 10px 30px",
                      "font-size": "13px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "vertical-align": "middle",
                      "background-color": "#fa8739"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "bottom"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Beyond backpack",
                      "src": "http://191n.mj.am/img/191n/3s/x4g.jpg",
                      "align": "center",
                      "width": "178px",
                      "border": "none",
                      "height": "auto",
                      "padding": "10px 0px 20px 0px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p>BEYOND BACKPACK</p>\n          <p style=\"color: rgb(250, 135, 57);\">20&#x20AC;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#000",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 10px 30px",
                      "font-size": "13px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "inner-padding": "10px 25px 10px 25px",
                      "vertical-align": "middle",
                      "background-color": "#612d0a"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "bottom"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Jensen shorts",
                      "src": "http://191n.mj.am/img/191n/3s/x46.jpg",
                      "align": "center",
                      "width": "182px",
                      "border": "none",
                      "height": "auto",
                      "padding": "30px 0px 20px 0px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p>JENSEN SHORTS</p>\n          <p style=\"color: rgb(250, 135, 57);\">28&#x20AC;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#000",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 10px 30px",
                      "font-size": "13px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "vertical-align": "middle",
                      "background-color": "#fa8739"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "bottom"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Verdant cap",
                      "src": "http://191n.mj.am/img/191n/3s/x4h.jpg",
                      "align": "center",
                      "width": "129px",
                      "border": "none",
                      "height": "auto",
                      "padding": "20px 0px 20px 0px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p>VERDANT CAP</p>\n          <p style=\"color: rgb(250, 135, 57);\">20&#x20AC;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#000",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 25px 10px 25px",
                      "font-size": "13px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "vertical-align": "middle",
                      "background-color": "#fa8739"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "bottom"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Blake polo shirt",
                      "src": "http://191n.mj.am/img/191n/3s/x4i.jpg",
                      "align": "center",
                      "width": "208px",
                      "border": "none",
                      "height": "auto",
                      "padding": "20px 0px 20px 0px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p>BLAKE POLO SHIRT</p>\n          <p style=\"color: rgb(250, 135, 57);\">25&#x20AC;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#000",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 10px 30px",
                      "font-size": "13px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "vertical-align": "middle",
                      "background-color": "#fa8739"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "bottom"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Sketch floral",
                      "src": "http://191n.mj.am/img/191n/3s/x4j.jpg",
                      "align": "center",
                      "width": "72px",
                      "border": "none",
                      "height": "auto",
                      "padding": "20px 0px 20px 0px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p>SKETCH FLORAL</p>\n          <p style=\"color: rgb(250, 135, 57);\">23&#x20AC;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#000",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 10px 30px",
                      "font-size": "13px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "vertical-align": "middle",
                      "background-color": "#fa8739"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "bottom"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Man 1",
                      "src": "http://191n.mj.am/img/191n/3s/x4k.jpg",
                      "align": "center",
                      "width": "301px",
                      "height": "auto",
                      "padding": "0px 0px 0px 0px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"font-size: 19px;\">ANDERSON SWEATER</p>\n          <p style=\"font-size: 36px;\">75&#x20AC;</p>\n          <p>The Anderson Sweater features a floral all-over print with contrast colour.</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#fff",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "13px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fa8739",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 20px 30px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "inner-padding": "10px 25px 10px 25px",
                      "vertical-align": "middle",
                      "background-color": "#fff"
                    }
                  }
                ],
                "attributes": {
                  "width": "50%",
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fa8739",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"font-size: 19px;\">ALDER TWO JONES JACKET</p>\n          <p style=\"font-size: 36px;\">100&#x20AC;</p>\n          <p>Colour-block design, zip entry, oxford hood lining, side pockets &amp; TC lining.</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#fff",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "13px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 10px 30px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "inner-padding": "10px 25px 10px 25px",
                      "vertical-align": "middle",
                      "background-color": "#fa8739"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Man 2",
                      "src": "http://191n.mj.am/img/191n/3s/xj6.jpg",
                      "align": "center",
                      "width": "302px",
                      "border": "none",
                      "height": "auto",
                      "padding": "0px 0px 0px 0px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#2f323b",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"font-size: 14px;\">DISCOVER OUR</p>\n          <p style=\"font-size: 27px;\">SUMMER COLLECTION</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#fff",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "13px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fa8739",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Topaz C3 shoes",
                      "src": "http://191n.mj.am/img/191n/3s/x4q.jpg",
                      "align": "center",
                      "height": "auto",
                      "padding": "0px 25px 0px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p>TOPAZ C3 SHOES</p>\n          <p style=\"color: rgb(250, 135, 57);\">70&#x20AC;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#000",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 10px 30px",
                      "font-size": "13px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "inner-padding": "10px 25px 10px 25px",
                      "vertical-align": "middle",
                      "background-color": "#fa8739"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Camden backpack",
                      "src": "http://191n.mj.am/img/191n/3s/x4r.jpg",
                      "align": "center",
                      "width": "199px",
                      "border": "none",
                      "height": "auto",
                      "padding": "0px 25px 0px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p>CAMDEN BACKPACK</p>\n          <p style=\"color: rgb(250, 135, 57);\">50&#x20AC;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#000",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "BUY NOW"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "https://mjml.io",
                      "align": "center",
                      "color": "#fff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "0px 30px 10px 30px",
                      "text-align": "center",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "inner-padding": "10px 25px 10px 25px",
                      "vertical-align": "middle",
                      "background-color": "#fa8739"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Cards",
                      "src": "http://191n.mj.am/img/191n/3s/x47.png",
                      "align": "center",
                      "width": "72px",
                      "height": "auto",
                      "padding": "10px 25px 10px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"font-size: 15px;font-weight: bold;\">PAYMENT METHODS</p>\n          <p>We accept all majors payments options</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#fff",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "13px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Currencies",
                      "src": "http://191n.mj.am/img/191n/3s/x48.png",
                      "align": "center",
                      "width": "70px",
                      "border": "none",
                      "height": "auto",
                      "padding": "10px 25px 0px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"font-size: 15px;font-weight: bold;\">CURRENCIES CHOICE</p>\n          <p>You have the choice to pay with your own currencies</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#fff",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "13px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Express",
                      "src": "http://191n.mj.am/img/191n/3s/x4y.png",
                      "align": "center",
                      "width": "82px",
                      "border": "none",
                      "height": "auto",
                      "padding": "10px 25px 8px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"font-size: 15px;font-weight: bold;\">EXPRESS SHIPPING</p>\n          <p>Delivered tomorrow before noon</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "center",
                      "color": "#fff",
                      "padding": "0px 25px 0px 25px",
                      "font-size": "13px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#2f323b",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "alt": "Racoon logo",
                      "src": "http://191n.mj.am/img/191n/3s/x49.png",
                      "align": "center",
                      "width": "180px",
                      "border": "none",
                      "height": "auto",
                      "padding": "10px 0px 0px 0px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "middle"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "elements": [
                          {
                            "src": "https://easy-email-m-ryan.vercel.app/images/acbae5eb-efa4-4eb6-866c-f421e740b713-ad3c92b1-9cdb-4a7b-aad3-75ad809db8a3.png",
                            "href": "[[SHORT_PERMALINK]]",
                            "name": "facebook",
                            "target": "_blank",
                            "content": "Facebook",
                            "icon-size": "20px"
                          },
                          {
                            "src": "https://easy-email-m-ryan.vercel.app/images/98520d6c-5cef-449e-bcbf-6316ccec2088-e8780361-0deb-4896-895e-e690c886cdf0.png",
                            "href": "[[SHORT_PERMALINK]]",
                            "name": "twitter",
                            "target": "_blank",
                            "content": "Google",
                            "icon-size": "20px"
                          },
                          {
                            "src": "https://easy-email-m-ryan.vercel.app/images/b064f705-34ba-4400-975e-9dd0cec21c30-cc9aa158-56bd-4bf1-b532-72390d25c864.png",
                            "href": "[[SHORT_PERMALINK]]",
                            "name": "google",
                            "target": "_blank",
                            "content": "Twitter",
                            "icon-size": "20px"
                          }
                        ]
                      }
                    },
                    "type": "social",
                    "children": [],
                    "attributes": {
                      "mode": "horizontal",
                      "align": "center",
                      "color": "#333333",
                      "padding": "20px 25px 10px 25px",
                      "font-size": "13px",
                      "icon-size": "20px",
                      "font-weight": "normal",
                      "line-height": "22px",
                      "icon-padding": "0px",
                      "text-padding": "4px 4px 4px 0px",
                      "border-radius": "3px",
                      "inner-padding": "4px 4px 4px 4px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "middle"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#fa8739",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          }
        ],
        "attributes": {
          "width": "600px",
          "background-color": "#d6dde5"
        }
      },
      "subject": "Racoon - Ecommerce",
      "subTitle": "Racoon - Ecommerce"
    }
  ];
  // const { collectionCategory } = useCollection();
  const { width } = useWindowSize();

  const smallScene = width < 1400;

  // let { id, userId } = useQuery();
  // const loading = useLoading(templates.loadings.fetchById);
  // const {
  //   mergeTags,
  //   setMergeTags,
  // } = useMergeTagsModal(testMergeTags);

  // List Blocks
  // const list = useAppSelector('component');
  // useEffect(() => {
  //   dispatch(templates);
  // }, [dispatch]);

  // List Blocks
  

  const mergeTagData = {
    "fields": {
      "prod": "Namhya Amla Powder 100% Natural ( 100g X 2) - for Hair Fall Reduction and Good Skin (Pack of 2)",
      "this": {
        "imgUrl": "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
        "handleUrl": "https://namhyafoods.com/"
      },
      "brand": "NAMHYA",
      "productLogo": "https://namhyafoods.com/cdn/shop/files/ad8269f7-797d-4a7a-a8d9-e5404a91409b.__CR0_0_1000_1000_PT0_SX300_V1___-removebg-preview_1_f73f0ffc-0699-47ee-a542-ec75e882f1ef.png?v=1649917400",
      "headerImgUrl": "https://api.x.glue.is/file/4d9a3702-10c2-4d41-8d1b-1cfa5d6489c7",
      "productPrice": "450",
      "productImgUrl": "https://cdn.shopify.com/s/files/1/0624/0655/7914/files/AMLA_81cc1abe-6921-49fa-97a9-72c321c41d8f.jpg?v=1689748888",
      "contentPreProductImage": "Dear Gita, Are you looking to boost your metabolism and achieve your health goals? It's time to make some simple lifestyle changes that can have a big impact. Here are effective strategies to give your metabolism a boost",
      "contentPostProductImage": "Drinking water before meals is not only a great way to stay hydrated, but it can also help increase your metabolism and promote weight loss. Water can help fill you up, reducing the chances of overeating and aiding in digestion. Now, I want to introduce you to a fantastic product that can support your journey towards a healthier metabolism and overall well-being. Introducing Namhya Ayurvedic health pack (CRED). This carefully crafted Ayurvedic health pack is designed to boost your metabolism, support digestion, and enhance your overall vitality."
    },
    "mutableKeys": [
      "productLogo",
      "prod"
    ]
  }

  const mergeTags = mergeTagData.fields;
  // useEffect(() => {
  //   dispatch(mergeTagData);
  // }, [dispatch]);

  // const updateDefaultData = {
  //   "fields": {
  //     "prod": "Namhya Amla Powder 100% Natural ( 100g X 2) - for Hair Fall Reduction and Good Skin (Pack of 2)",
  //     "this": {
  //       "imgUrl": "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
  //       "handleUrl": "https://namhyafoods.com/"
  //     },
  //     "brand": "NAMHYA",
  //     "productLogo": "https://namhyafoods.com/cdn/shop/files/ad8269f7-797d-4a7a-a8d9-e5404a91409b.__CR0_0_1000_1000_PT0_SX300_V1___-removebg-preview_1_f73f0ffc-0699-47ee-a542-ec75e882f1ef.png?v=1649917400",
  //     "headerImgUrl": "https://api.x.glue.is/file/4d9a3702-10c2-4d41-8d1b-1cfa5d6489c7",
  //     "productPrice": "450",
  //     "productImgUrl": "https://cdn.shopify.com/s/files/1/0624/0655/7914/files/AMLA_81cc1abe-6921-49fa-97a9-72c321c41d8f.jpg?v=1689748888",
  //     "contentPreProductImage": "Dear Gita, Are you looking to boost your metabolism and achieve your health goals? It's time to make some simple lifestyle changes that can have a big impact. Here are effective strategies to give your metabolism a boost",
  //     "contentPostProductImage": "Drinking water before meals is not only a great way to stay hydrated, but it can also help increase your metabolism and promote weight loss. Water can help fill you up, reducing the chances of overeating and aiding in digestion. Now, I want to introduce you to a fantastic product that can support your journey towards a healthier metabolism and overall well-being. Introducing Namhya Ayurvedic health pack (CRED). This carefully crafted Ayurvedic health pack is designed to boost your metabolism, support digestion, and enhance your overall vitality."
  //   },
  //   "mutableKeys": [
  //     "productLogo",
  //     "prod"
  //   ]
  // }

  // useEffect(() => {
  //   if (collectionCategory) {
  //     BlockMarketManager.addCategories([collectionCategory]);
  //     return () => {
  //       BlockMarketManager.removeCategories([collectionCategory]);
  //     };
  //   }
  // }, [collectionCategory]);

  // Get Template Data By Doing API Call on Component mount

  // useEffect(() => {
  //   console.log("aayi kya id", id)
  //   if (id) {
  //     if (!userId) {
       
  //       console.log("check 2")
  //       dispatch(template.actions.fetchById({ id: +id }));
  //     }
  //   } else {
  //     console.log("check 3")
  //     dispatch(template.actions.fetchDefaultTemplate(undefined));
  //   }

  //   return () => {
  //     dispatch(template.actions.set(null));
  //   };
  // }, [dispatch, id, userId]);

  // Update merge tags keys
  // useEffect(() => {
  //   if (!mergeTagData || !Object.keys(mergeTagData).length) return;
  //   setMergeTags({
  //     ...mergeTagData.fields,
  //     mutableKeys: mergeTagData.mutableKeys
  //   });
  // }, [mergeTagData]);

  // Compress Image & Upload
  const onUploadImage = async (blob: Blob) => {
    const compressionFile = await (
      await imageCompression
    ).default(blob as File, {
      maxWidthOrHeight: 1440,
    });
    return ''
  };

  // Method to update merge tag value
  const onChangeMergeTag = useCallback((path: string, val: any) => {
    // setMergeTags((old:any) => {
    //   const newObj = cloneDeep(old);
    //   set(newObj, path, val);
    //   return newObj;
    // });
  }, []);

  const templateData = 
    {
      "content": {
        "data": {
          "value": {
            "fonts": [],
            "font-size": "14px",
            "breakpoint": "480px",
            "headStyles": [],
            "responsive": true,
            "text-color": "#000000",
            "font-family": "lucida Grande,Verdana,Microsoft YaHei",
            "line-height": "1.7",
            "headAttributes": ""
          }
        },
        "type": "page",
        "children": [
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/b999e7e4-9242-4435-a4f6-c8f1d6fdfd96-image.png",
                      "align": "center",
                      "width": "214px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "10px 25px 10px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"text-align: center; margin: 10px 0;color:#151e23;font-size:14px;font-family:Georgia,Helvetica,Arial,sans-serif\">Product | Concept | Contact</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "0px 25px 15px 25px",
                      "font-size": "13px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "30px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/ed0590da-b6dc-4d14-bfc7-6f1931a390fd-image.png",
                      "align": "center",
                      "width": "600px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "0px 0px 0px 0px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"line-height: 30px; margin: 10px 0; text-align: center; color:#151e23; font-size:30p; font-family:Georgia,Helvetica,Arial,sans-serif\">- Our Holiday Recipes -</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "30px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "30px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/be61d137-bb44-4358-a681-dea81d2a8ec1-image.png",
                      "align": "center",
                      "width": "1200px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "0px 30px 20px 30px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif\"><b>Cake Title</b></p>\n          <p style=\"line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style=\"line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif\"><u>Choose me</u> &gt;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "0px 40px 0px 40px",
                      "font-size": "13px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/b3e16b18-9385-421e-b6a7-b28a749d6abf-image.png",
                      "align": "center",
                      "width": "1200px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "20px 30px 20px 30px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif\"><b>Cake Title</b></p>\n          <p style=\"line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style=\"line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif\"><u>Choose me</u> &gt;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "0px 40px 0px 40px",
                      "font-size": "13px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "rtl",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/6c23a5d0-ec6c-4634-8753-49e4a2da407e-image.png",
                      "align": "center",
                      "width": "1200px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "20px 30px 20px 30px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              },
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "<p style=\"margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif\"><b>Cake Title</b></p>\n          <p style=\"line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style=\"line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif\"><u>Choose me</u> &gt;</p>"
                      }
                    },
                    "type": "text",
                    "children": [],
                    "attributes": {
                      "align": "left",
                      "color": "#55575d",
                      "padding": "0px 40px 0px 40px",
                      "font-size": "13px",
                      "font-family": "Arial, sans-serif",
                      "line-height": "22px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {
                        "content": "Discover all desserts"
                      }
                    },
                    "type": "button",
                    "children": [],
                    "attributes": {
                      "href": "#",
                      "align": "center",
                      "color": "#ffffff",
                      "border": "none",
                      "target": "_blank",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "14px",
                      "text-align": "center",
                      "font-family": "Georgia, Helvetica, Arial, sans-serif",
                      "font-weight": "normal",
                      "line-height": "120%",
                      "border-radius": "3px",
                      "text-transform": "none",
                      "vertical-align": "middle",
                      "text-decoration": "none",
                      "background-color": "#354552"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/0a270377-104e-4ea8-bd94-3df6d7afaa01-image.png",
                      "align": "center",
                      "width": "600px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "0px 0px 0px 0px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "0px 0px 0px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          },
          {
            "data": {
              "value": {
                "noWrap": false
              }
            },
            "type": "section",
            "children": [
              {
                "data": {
                  "value": {}
                },
                "type": "column",
                "children": [
                  {
                    "data": {
                      "value": {}
                    },
                    "type": "image",
                    "children": [],
                    "attributes": {
                      "src": "https://assets.maocanhua.cn/a35965f4-900a-43a5-9c96-cef1e398e9c5-image.png",
                      "align": "center",
                      "width": "202px",
                      "height": "auto",
                      "target": "_blank",
                      "padding": "10px 25px 10px 25px"
                    }
                  },
                  {
                    "data": {
                      "value": {
                        "elements": [
                          {
                            "src": "https://assets.maocanhua.cn/93013b18-062d-48d7-ae00-4a5f0a9ac988.png",
                            "href": "",
                            "name": "facebook",
                            "color": "#333333",
                            "target": "_blank",
                            "content": "Facebook",
                            "font-size": "13px",
                            "icon-size": "20px",
                            "line-height": "22px",
                            "text-padding": "4px 4px 4px 0",
                            "vertical-align": "middle",
                            "text-decoration": "none"
                          },
                          {
                            "src": "https://assets.maocanhua.cn/a81ddd4b-3a12-47be-91f3-28d71eced397.png",
                            "href": "",
                            "name": "pinterest",
                            "color": "#333333",
                            "target": "_blank",
                            "content": "Google",
                            "font-size": "13px",
                            "icon-size": "20px",
                            "line-height": "22px",
                            "text-padding": "4px 4px 4px 0",
                            "vertical-align": "middle",
                            "text-decoration": "none"
                          },
                          {
                            "src": "https://assets.maocanhua.cn/0a411326-17c5-4814-ad3a-6927266f097e.png",
                            "href": "",
                            "name": "instagram",
                            "color": "#333333",
                            "target": "_blank",
                            "content": "Twitter",
                            "font-size": "13px",
                            "icon-size": "20px",
                            "line-height": "22px",
                            "text-padding": "4px 4px 4px 0",
                            "vertical-align": "middle",
                            "text-decoration": "none"
                          }
                        ]
                      }
                    },
                    "type": "social",
                    "children": [],
                    "attributes": {
                      "mode": "horizontal",
                      "align": "center",
                      "color": "#333333",
                      "padding": "10px 25px 10px 25px",
                      "font-size": "13px",
                      "icon-size": "20px",
                      "font-weight": "normal",
                      "line-height": "22px",
                      "icon-padding": "0px",
                      "text-padding": "4px 4px 4px 0px",
                      "border-radius": "3px"
                    }
                  }
                ],
                "attributes": {
                  "border": "none",
                  "padding": "0px 0px 0px 0px",
                  "vertical-align": "top"
                }
              }
            ],
            "attributes": {
              "border": "none",
              "padding": "20px 0px 20px 0px",
              "direction": "ltr",
              "text-align": "center",
              "background-size": "auto",
              "background-color": "#ffffff",
              "background-repeat": "repeat",
              "background-position": "top center"
            }
          }
        ],
        "attributes": {
          "width": "600px",
          "css-class": "mjml-body",
          "background-color": "#F4F4F4"
        }
      },
      "subject": "Welcome to Easy-email",
      "subTitle": "Welcome to Easy-email"
    }
  



  // Load Template Data into the Editor
  const initialValues: IEmailTemplate | null = useMemo(() => {
    if (!templateData) return null;
    const sourceData = cloneDeep(templateData.content) as any;
    return {
      ...templateData,
      content: sourceData, // replace standard block
    };
  }, [templateData]);

  // Update the Json
  // const categories = useMemo(() => {
  //   if (!list) return [];
  //   const newList = cloneDeep(list);
  //   const filteredList = newList.map((l: any) => l.templateJson);
  //   defaultCategories[0].blocks = [
  //     ...defaultCategories[0].blocks,
  //     ...filteredList,
  //   ];
  //   return defaultCategories;
  // }, [list]);

  const onSubmit = useCallback(
    async (
      values: IEmailTemplate,
      form: any,
    ) => {
      console.log("hello there !")
    },
    [],
  );

  // Method to do Preview with Injected Data
  const onBeforePreview: EmailEditorProviderProps['onBeforePreview'] = useCallback(
    (html: string, mergeTags:any) => {
      const engine = new Liquid();
      const tpl = engine.parse(html);
      return engine.renderSync(tpl, mergeTags);
    },
    [],
  );

  // const saveMyTemplate = async (values: IEmailTemplate) => {
  //   const val1 = onExportJSON(values);
  //   // const val = onExportHTML(values, mergeTags);
  //   const val2 = onExportMJML(values, mergeTags);
  //   // const val3 = await onExportImage(values, mergeTags);

  //   dispatch(component.actions.update({
  //     id: '1313',
  //     data: {
  //       templateMjml: val2,
  //       templateJson: val1,
  //     }
  //   }));
  // };

  if (!templateData ) {
    return (
    
        <div style={{ height: '100vh' }} />
      
    );
  }

  if (!initialValues) return null;

  return (
    <ConfigProvider locale={enUS}>
      <div>
        <EmailEditorProvider
          key={88}
          height={'calc(100vh - 68px)'}
          data={initialValues}
          onUploadImage={onUploadImage}
          onSubmit={onSubmit}
          onChangeMergeTag={onChangeMergeTag}
          setMergeTags={() => { console.log('SDFF')}}
          autoComplete
          enabledLogic
          dashed={false}
          mergeTags={mergeTags}
          mergeTagGenerate={tag => get(mergeTags, tag)}
          onBeforePreview={onBeforePreview}
          socialIcons={[]}
        >
          {({ values }, { submit, restart }) => {
            return (
              <>
                <PageHeader
                  style={{ background: 'var(--color-bg-2)' }}
                  backIcon
                  title='Go Back To xG'
                  onBack={() => {
                    if (window.confirm('Are you sure you want to go back?')) {
                      // Perform the navigation here
                      // history.push('/');
                    }
                  }}
                  extra={
                    <>
                    <Stack alignment='center'>
                      <Button
                        type='outline'
                        onClick={() => { alert('bss kr bkl') }}
                        icon={<IconSave />
                        }
                      ></Button>
                    </Stack>
                    </>
                  }
                />
                <StandardLayout
                  compact={!smallScene}
                  changeCategories={changeCategories}
                  templates={templates}
                  mergeTagData={mergeTagData} 
                  categories={[]}
                >
                  <EmailEditor />
                </StandardLayout>
              </>
            );
          }}
        </EmailEditorProvider>
        <style>{`#bmc-wbtn {display:none !important;}`}</style>
      </div>
    </ConfigProvider>
  );
}