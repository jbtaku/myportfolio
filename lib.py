import torch
import torch.nn as nn
import torchvision.transforms.functional as F
from torch.utils.data import Dataset
from PIL import Image
import io


class CNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(in_channels=3, out_channels=64, kernel_size=5, padding=2),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2),
            nn.Conv2d(in_channels=64, out_channels=128, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2),
            nn.Conv2d(in_channels=128, out_channels=256, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2),
            nn.Conv2d(in_channels=256, out_channels=128, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
        )
        self.classifier = nn.Linear(in_features=8 * 8 * 128, out_features=3)
    
    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        x = self.classifier(x)
        return x

class Mydataset(Dataset):
    def __init__(self, img, transforms):
        super().__init__()
        self.transforms = transforms
        pil_image = Image.open(io.BytesIO(img)).convert('RGB')
        data = [[F.resize(img=pil_image, size=(64, 64)), torch.tensor(0)]]
        self.data = data

    def __getitem__(self, index):
        data = self.data[index][0]
        data = self.transforms(data)
        label = self.data[index][1]

        return data, label

    def __len__(self):
        return len(self.data)
